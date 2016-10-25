var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    var items = this.props.items.map((item) => {
      return(
        <div key={ item.id } >
          <Item item = {item}
                handleDelete = {this.handleDelete.bind(this, item.id)} />
        </div>  
      )
    });

    return(
      <div>
        { items }
      </div>
    )
  }
});