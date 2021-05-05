import "../static/review.css"

function ReviewList({ reviews }) {

  return (
    <>
      {reviews.length ? (
        <div>
          <table>
            <caption><b>Reviews</b></caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
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
