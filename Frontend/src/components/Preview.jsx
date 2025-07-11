import { useState } from "react";
import "../CSS/Home/ClientReview.css";
import { useSelector } from "react-redux";
import userlogo from "../assets/User.jpg";
import stringSimilarity from "string-similarity"; 

const ProductReview = ({ productName }) => {
  const { data: Reviews = [] } = useSelector((state) => state.reviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  
  const filteredReviews = Reviews.filter((review) => {
    const reviewProduct = review.productName || "";
    const similarityScore = stringSimilarity.compareTwoStrings(
      reviewProduct.toLowerCase(),
      productName.toLowerCase()
    );
    return similarityScore >= 0.7; 
  });

  const totalReviews = filteredReviews.length;

  const nextReviews = () => {
    if (totalReviews > 0) {
      setCurrentIndex((prev) => (prev + itemsPerPage) % totalReviews);
    }
  };

  const prevReviews = () => {
    if (totalReviews > 0) {
      setCurrentIndex((prev) => {
        const newIndex = prev - itemsPerPage;
        return newIndex < 0 ? (totalReviews + newIndex) % totalReviews : newIndex;
      });
    }
  };

  const visibleReviews =
    totalReviews === 0
      ? []
      : Array.from({ length: Math.min(itemsPerPage, totalReviews) }, (_, i) => {
          const index = (currentIndex + i) % totalReviews;
          return filteredReviews[index];
        });

  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-heading">What Our Customers Say</h2>

      {totalReviews === 0 ? (
        <p className="no-reviews-msg">No reviews available yet.</p>
      ) : (
        <div className="reviews-slider">
          {totalReviews > itemsPerPage && (
            <button className="arrow left" onClick={prevReviews}>
              ❮
            </button>
          )}

          <div className="review-cards-container">
            {visibleReviews.map((review, idx) => (
              <div className="review-card" key={review._id || idx}>
                <img src={userlogo} alt="User" className="user-image" />
                <p className="review-text">"{review.review}"</p>
                <h4 className="user-name">{review.name}</h4>
                <div className="user-rating">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            ))}
          </div>

          {totalReviews > itemsPerPage && (
            <button className="arrow right" onClick={nextReviews}>
              ❯
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductReview;
