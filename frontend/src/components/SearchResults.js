import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { useParams } from "react-router-dom";
import Card from "./Card.js";
import "../static/Card.css";

function SearchResults() {
  const [snacks, setSnacks] = useState([]);
  const searchQuery = useParams();

  useEffect(() => {
    snacksAPI.getSnacks(searchQuery["search"], null).then((data) => {
      setSnacks(data);
    });
  }, [searchQuery]);

  return (
    <div className="container">
      <div>
        <h1>Search results</h1>
        <i>{snacks.length ? "Click an item to get more info" : "No results"}</i>
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

export default SearchResults;
