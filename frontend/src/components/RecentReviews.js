import ReactStars from "react-rating-stars-component";
import "../static/review.css";

function RecentReviews({ reviews }) {
  return (
    <>
      <h2 styles="font-size:20px">Reviews</h2>
      {reviews.length ? (
        <div id="starContainer">
          {reviews.map((review) => (
              <>
              <p>By <b><i>{review.owner}</i></b> on <i>{review.pub_date.split("T")[0]}</i></p>
              <ReactStars 
                  count={5}
                  value={review.rating}
                  edit={false}
                  size={30}
                  activeColor="#ffd700"
                  isHalf={true}
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