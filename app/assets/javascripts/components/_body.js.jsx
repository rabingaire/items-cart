var Body = React.createClass({
  getInitialState() {
    return { items: [] }  
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => {this.setState({items: response}) }); 
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({items: newState});
  },

  handleDelete(id) {
    $.ajax({
      url: '/api/v1/items/' + id,
      type: 'DELETE',
      success: () => { 
        this.removeItemClient(id);
      }
    });
  },

  //how is this working :(
  removeItemClient(id) {
    var newState = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newState });
  },

  render() {
    return(
      <div>
        <NewItem handleSubmit = { this.handleSubmit }/>
        <AllItems items = { this.state.items } handleDelete = { this.handleDelete }/>
      </div>
    )
  }
});