import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import Card from "./Card.js"
import "../static/Card.css"
import { withRouter } from "react-router";
import {useParams} from "react-router-dom";

function SnacksByTag() {

  const [items, setItems] = useState([]);
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
              <Card name = {items.name} description = "" pathname = {`/snack/${items.id}`} description = ''/>
          ))}
          </div>
        </div>
      </div>
  )
}

export default withRouter(SnacksByTag)
