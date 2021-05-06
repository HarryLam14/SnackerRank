import ReactStars from "react-rating-stars-component";
import "../static/review.css";

function RecentReviews({ reviews }) {
  return (
    <>
      {reviews.length ? (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <>
                <p>By <i>{review.owner}</i> on <i>{review.pub_date.split("T")[0]}</i></p>
                <ReactStars 
                    count={5}
                    value={review.rating}
                    edit={false}
                    size={25}
                    activeColor="#ffd700"
                />
                <p>{review.reviewtext}</p>
                <br/>
                </>
            ))}
        </div>
      ) : (
        <i>No reviews</i>
      )}
    </>
  );
}

export default RecentReviews;