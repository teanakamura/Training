# Reactアプリ

### 有する機能

- サインイン
  1. ログインボタンを押すとsuperagentでリクエストが送られる

  2. Grapeでリクエストを受け取りDBに問い合わせる

  3. DBにマッチするユーザーがあったらgrape-entityでDBのデータを返す

     seedsがDB/seeds.rbにある。

  4. stateを変えてログイン成功とする

- カウント機能

- 履歴参照

  モーダルを作る
  モーダルはクリックしたら消えるようにする
  モーダル出現させるときのCSSは、cloneしてもらうgit内に書いてあるものを使ってよい

- ヘッダー

  カウント数とログインしているユーザー名を表示

- サインアウト



### 実行

```bash
bundle install
npm install
npm run dev
bin/rails server
```

