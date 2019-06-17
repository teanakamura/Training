#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re
from graphviz import Digraph

class Morph:
    def __init__(self, surface, base, pos, pos1):
        self.surface = surface
        self.base = base
        self.pos = pos
        self.pos1 = pos1
    def __str__(self):
        return '%s\t%s\t%s\t%s' % (self.surface, self.base, self.pos, self.pos1)


class Chunk:
    def __init__(self, morphs = None, dst = None, src = None):
            # []などのmutableなオブジェクトをデフォルト値とする際は注意。Noneなどを使えば気にしなくて良い。
        self.morphs = [] if morphs is None else morphs
        self.dst = '' if dst is None else dst
        self.src = [] if src is None else src
    def __str__(self):
        return ('surface:%s\tdst:%d\tsrc:%s\n' \
                % (''.join([m.surface for m in self.morphs]), self.dst, ', '.join(map(str, self.src)))).rstrip('\n')
    def chunk_surface_without_symbol(self):
        return ''.join([m.surface for m in self.morphs if m.pos != '記号'])


# get relative path from working directory
def rel_path(rel_path_from_this_file):
    return os.path.normpath(os.path.join(os.path.dirname(__file__), rel_path_from_this_file))


# グラフ描画
def plot_graphviz(chunk_list, num):
    graph = Digraph(format='png')
    graph.attr('node', shape='circle')
    for i, chunk in enumerate(chunk_list):
        graph.node(str(i), chunk.chunk_surface_without_symbol().decode('utf-8'))
                # int型のままだとerror
                # 日本語は utf-8 でなく Unicode文字列で記述される必要がある。
    for i, chunk in enumerate(chunk_list):
        if chunk.dst >= 0:
            graph.edge(str(i), str(chunk.dst))
    graph.view(rel_path('../data/graph_line%d' % num))


# cabochaの解析結果を成型
# sentence_list >> chunk_list >> Chunk object >> Morph object
sentence_list = []
chunk_dict = {}
# count = 0
with open(rel_path('../data/neko.txt.cabocha')) as source_f:
    for parsed in source_f:
        # count += 1
        # if count > 150: break
        if parsed == 'EOS\n':
            sentence_list.append([m for i, m in sorted(chunk_dict.items(), key = lambda c: c[0])])
            chunk_dict.clear()
        elif parsed[:2] == '* ':
            col = parsed.split()
            idx = int(col[1])
            dst = int(col[2].rstrip('D'))
            if idx not in chunk_dict:
                chunk_dict[idx] = Chunk()
            chunk_dict[idx].dst = dst
            if dst >= 0:
                if dst not in chunk_dict:
                    chunk_dict[dst] = Chunk()
                chunk_dict[dst].src.append(idx)
        else:
            morph = re.split(r'[\t,]', parsed)
            chunk_dict[idx].morphs.append(Morph(morph[0], morph[7], morph[1], morph[2]))

# 出力
num = input('print number: ')
for i, sentence in enumerate(sentence_list, 1):
    if i == num:
        plot_graphviz(sentence, num)
        break
