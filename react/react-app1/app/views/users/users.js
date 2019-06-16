import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

class Form1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_state1: "input email adress here",
      first_state2: "input password"
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
  }
  onTextAreaChange(event){
    this.setState({ event.target.name: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          value={this.state.first_state1}
          name="content1"
          onChange={this.onTextAreaChange}/>
        <textarea
          value={this.state.first_state2}
          name="content2"
          onChange={this.onTextAreaChange}/>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    );
  }
}

// class counter
// class index

ReactDOM.render(
<Form1/>,
document.getElementById('login')
)
