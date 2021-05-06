import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { reviewsAPI } from "../api/reviews";
import { Link, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import AddReview from "./AddReview";
import "../static/Card.css";
import "../static/snackdetail.css";

function SnackDetail({ loggedIn }) {
  const [snack, setSnack] = useState([]);
  const [tags, setTags] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const snack_id = useParams();

  useEffect(() => {
    snacksAPI.getSnack(snack_id["id"]).then(
      (snack) => {
        setSnack(snack);
        setTags(snack.tags);
        setReviews(snack.reviews);
      },
      (error) => console.log(error)
    );
  }, [snack_id]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const newReview = (review) => {
    reviewsAPI
      .addReview(review)
      .then((data) => {
        if (data.status===409) {
          alert("User can't add more than one review");
          return;
        }
        setReviews([...reviews, data]);
        setShowForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="roundedcontainer">
        <img src={snack.image} id="imagedisp" alt="" />
        <div id="snacktext">
          <h1>{snack.name}</h1>
          <p>{snack.description}</p>
          <ul className="horizontaltags">
            <h6>Tags:</h6>
            {tags.map((tag) => {
              return (
                <li key={tag.id}>
                  <Link to={`/tag/${tag.name}`}>{tag.name}</Link>
                </li>
              );
            })}
          </ul>
          <br />
          <ReviewList reviews={reviews} /> <br />
          {loggedIn ? (
            <button onClick={toggleForm}>Add a Review!</button>
          ) : (
            <Link className="logoutBtn" to="/login">
              <button>Add a Review!</button>
            </Link>
          )}
          {loggedIn && showForm && (
            <AddReview snack_id={snack_id["id"]} newReview={newReview} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SnackDetail;
