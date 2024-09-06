// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div className="star-rating">
      {'★'.repeat(stars).padEnd(5, '☆')}
    </div>
  );
};

export default StarRating;
