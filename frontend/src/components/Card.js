import React from "react";
import "../static/Card.css";
import { Link } from "react-router-dom";

/* function Card(name, description, pathname='/') {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <div className="card">
        <div className="container">
          <h4><b>{snack.name}</b></h4>
           <p className="card-body">{snack.description}</p>
           <Link to={pathname}><button>Click me</button></Link>
        </div>
      </div>
    </div>
  )
} 

export default Card */

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      image: props.image,
      description: props.description,
      pathname: props.pathname,
    };
  }

  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>
            <b>{this.state.name}</b>
          </h4>
          <img src={this.state.image} alt=""></img>
          <p className="card-body">{this.state.description}</p>
          <Link to={this.state.pathname}>
            <button>Click me</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Card;
