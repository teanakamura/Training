var SeparateJSX = React.createClass({
  displayName: 'SeparateJSX',

  render() {
    return React.createElement(
      'h2',
      null,
      'JSX on Separated File Speaking'
    );
  }
});

ReactDOM.render(React.createElement(SeparateJSX, null), document.getElementById('content'));