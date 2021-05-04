import React from "react";
import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import Card from "./Card.js"
import "./Card.css"
import { withRouter } from "react-router";
import {useParams} from "react-router-dom";

function CategoryDisplay() {

  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const targetTagID = useParams();

useEffect(() => {
  snacksAPI.getSnacks(null, targetTagID).then((data) => {
    setItems(data);
  })
  console.log(items);
  console.log(targetTagID);
}, [])

  return (
    <div className="container">
        <div>
          <h1>Items</h1>
          <p>Click an item to get more info</p>
          <div className ="cards">
            {items.map((items) => ( 
              <Card name = {items.name} description = ""/>
          ))}
          </div>
        </div>
        {/* Need to make this change the state to only show searched items */}
      </div>
  )
}

export default withRouter(CategoryDisplay)

// class myComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       searchedItems: [],
//       targetTagID: 0,
//       targetTag: {"tags": 1}
//     };
//   }

  
  

 /*  componentDidMount(props) {
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
  } */

/*   searchItems = ({ item }) => {
    const apiURL = `http://127.0.0.1:8000/snack?id=${item.id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          searchedItems: data,
        });
      });
  }; */

//   render() {
//     return (
//       <div className="container">
//         <div>
//           <h1>Items</h1>
//           <p>Click an item to get more info</p>
//           <div className ="cards">
//             {this.state.items.map((items) => ( 
//               <Card name = {items.name} description = ""/>
//           ))}
//           </div>
//         </div>
//         {/* Need to make this change the state to only show searched items */}
//       </div>
//     );
//   }
// }
// export default withRouter(myComponent);
