import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddReview({ snack_id, newReview }) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState();
  const [dateTime] = useState(`${new Date().toISOString().split(".")[0]}Z`);

  const handleDescriptionChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (newrating) => {
    setRating(newrating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      reviewtext: reviewText,
      rating: rating,
      snack_id: snack_id,
      pub_date: dateTime,
    };
    newReview(review);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Comment"
          onChange={handleDescriptionChange}
          required
        />
        <ReactStars
          count={5}
          size={15}
          activeColor="#ffd700"
          onChange={handleRatingChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
