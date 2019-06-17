class TextInput extends React.Component {
	constructor(){
  	super();
  	this.state = {input: '', textlist: []};
    this.handleInput=this.handleInput.bind(this);
    this.add=this.add.bind(this);
    this.mapping=this.mapping.bind(this);
  }
  handleInput(event){
  	this.setState({input:event.target.value});
  	console.log(this.state.input);
  }
  add(e){
  	e.preventDefault();
  	var textlist = this.state.textlist;
    var addtext = this.state.input
  	textlist.push(addtext);
  	this.setState({textlist: textlist, input: ''});
  }
  mapping(ko){
  return(<li>{ko}</li>)
  }
  render(){
  	const textlist = this.state.textlist.map(this.mapping);
		return(
    	<div>
        <p>Todo List</p>
        <ul>{textlist}</ul>
        <form onSubmit = {this.add}>
          <input
            type = "text"
            value = {this.state.input}
            onChange = {this.handleInput}
          />
          <input
            type = "submit"
            value = 'add'
          />
          </form>
      </div>
    );
  }
};

ReactDOM.render(
	<TextInput/>,
  document.getElementById('content')
);
