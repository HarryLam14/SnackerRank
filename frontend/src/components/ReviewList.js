import { useState, useEffect } from "react";
import { reviewsAPI } from "../api/reviews";
import "../static/review.css"

function ReviewList({ snack_id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsAPI.getReviews(snack_id).then(
      (reviews) => {
        setReviews(reviews);
      },
      (error) => console.log(error)
    );
  }, [snack_id]);

  return (
    <>
      {reviews.length ? (
        <div>
          <table>
            <caption><b>Reviews</b></caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.owner}</td>
                  <td>{review.reviewtext}</td>
                  <td>{review.rating}</td>
                  <td>{review.pub_date.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <i>No reviews</i>
      )}
    </>
  );
}

export default ReviewList;
