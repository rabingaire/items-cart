var Item = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) { 
      var name = this.refs.name.value; 
      var description = this.refs.description.value; 
      console.log('in handleEdit', this.state.editable, name, description); 
    } 
    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name = this.state.editable? <input ref='name' defaultValue = {this.props.item.name} /> : <h3>{ this.props.item.name }</h3>;
    var description = this.state.editable? <input ref='description' defaultValue = {this.props.item.description} /> : <p>{ this.props.item.description }</p>;
    return(
      <div>
        {name}
        {description}
        <button onClick = { this.handleEdit }> {this.state.editable? 'Submit' : 'Edit'} </button>
        <button onClick = { this.props.handleDelete }>Delete</button>
      </div>  
    )
  }
});