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
    snacksAPI.getSnacks(null, targetTagID).then((data) => {
      setSnacks(data);
    });
  }, [targetTagID]);

  return (
    <div className="container">
      <div>
        <h1>Snacks</h1>
        <p>{snacks.length ? "Click an item to get more info" : "No results"}</p>
        <div className="cards">
          {snacks.map((snack) => (
            <Card
              key={snack.id}
              name={snack.name}
              description=""
              pathname={`/snack/${snack.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withRouter(SnacksByTag);
