import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import Card from "./Card.js";
import "../static/Card.css";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

function SnacksByTag() {
  const [snacks, setSnacks] = useState([]);
  const targetTagID = useParams();

  useEffect(() => {
    snacksAPI.getSnacks(targetTagID["tags"], null).then((data) => {
      setSnacks(data);
    });
  }, [targetTagID]);

  return (
    <div className="container">
      <div>
        <h1>{targetTagID["tags"]} Snacks</h1>
        <i>{snacks.length ? "Click an item to get more info" : "No results"}</i>
        <div className="cards">
          {snacks.map((snack) => (
            <Card
              key={snack.id}
              name={snack.name}
              image={snack.image}
              description=""
              pathname={`/snack/${snack.id}`}
              score={snack.avg_rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withRouter(SnacksByTag);
