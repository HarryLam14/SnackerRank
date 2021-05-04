import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import "../static/Card.css";
import "../static/snackdetail.css";

function SnackDetail() {
  const [snack, setSnack] = useState([]);
  const snack_id = useParams();

  useEffect(() => {
    snacksAPI.getSnack(snack_id["id"]).then(
      (snack) => {
        setSnack(snack);
      },
      (error) => console.log(error)
    );
  }, [snack_id]);

  return (
    <div>
      <div id="roundedcontainer">
        <img src={snack.image} id="imagedisp" alt="" />
        <div id="snacktext">
          <h1>{snack.name}</h1>
          <p>{snack.description}</p>
          <ReviewList snack_id={snack_id["id"]} />
        </div>
      </div>
    </div>
  );
}

export default SnackDetail;
