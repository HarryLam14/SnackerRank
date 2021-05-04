import React from "react";
import "../static/Card.css"
import { Link } from 'react-router-dom'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      id: props.id,
      pathname: props.pathname,
    };
  }
  
  render() {
    return (
      <div className="card">
        <img/>
        <div className="container">
          <h4><b>{this.state.name}</b></h4>
          <p className="card-body">{this.state.description.substring(0, 200)}</p>
          <Link to={this.state.pathname}><button>Click me</button></Link>
        </div>
      </div>
    )
  }
}
export default Card;
