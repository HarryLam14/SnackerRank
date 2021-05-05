import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { Link, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import AddReview from "./AddReview";
import "../static/Card.css";
import "../static/snackdetail.css";

function SnackDetail() {
  const [snack, setSnack] = useState([]);
  const [tags, setTags] = useState([])
  const snack_id = useParams();

  useEffect(() => {
    snacksAPI.getSnack(snack_id["id"]).then(
      (snack) => {
        setSnack(snack);
        setTags(snack.tags);
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
  
          <ul className="horizontaltags">
            <h6>Tags:</h6>
            {tags.map(tag => {
              return(
                <li key={tag.id}><Link to={`/tag/${tag.name}`}>{tag.name}</Link></li>
              )}
            )}
          </ul>
          <br/>
          <ReviewList snack_id={snack_id["id"]} />
          <AddReview snack_id={snack_id["id"]}/>
          
        </div>
      </div>
    </div>
  );
}

export default SnackDetail;
