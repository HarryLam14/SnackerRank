import React from "react";
import "./Card.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  render() {
    return (
      <div class="card">
        <div class="card-content">
          <h2 class ="card-title">Something</h2>
          <img/>
          <p class="card-body">Random text</p>
        </div>
      </div>
    )
  }
}
export default Card;
