import { useState } from "react";
import { reviewsAPI } from "../api/reviews";

function AddReview({ snack_id }) {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState();
  const [dateTime] = useState(Date());
  const [snackID] = useState(snack_id);

  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      user: user,
      reviewtext: reviewText,
      rating: rating,
      snack_id: snackID,
      pub_date: dateTime,
    };
    reviewsAPI
      .addReview(newReview)
      .then((data) => {
        setReviews([...reviews, data]);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleDescriptionChange}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          onChange={handleRatingChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
