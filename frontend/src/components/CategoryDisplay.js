import React from "react";

class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchedItems: [],
    };
  }
  componentDidMount() {
    const apiUrl = `http://127.0.0.1:8000/search?tag=${props.tag}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
        });
        console.log(this.state.items);
      });
    //then((response) =>response.json()).then((data) => this.setState({items: data}));
  }

  searchItems = ({ item }) => {
    const apiURL = `http://127.0.0.1:8000/snack?id=${item.id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          searchedItems: data,
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1>Items</h1>
          <p>CLick an item to get more info</p>
          {this.state.items.map((items) => (
            <div>
              <button
                className="fetch-button"
                onClick={() => {
                  this.searchItems({ items });
                }}
              >
                {items.id}. {items.name}
              </button>
            </div>
          ))}
        </div>
        {/* Need to make this change the state to only show searched items */}
        <div>
          <h1>More Info</h1>
          {this.state.searchedItems.map((searchedItems) => (
            <div>
              <h3>{searchedItems.name}</h3>
              {searchedItems.description}
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default myComponent;
