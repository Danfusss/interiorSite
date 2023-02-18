import React from "react";

import "./FeedbackItem.css";

export default function FeedbackItem({ reviews }) {
  return (
    <div className="feedbackItem">
      <p className="feedbackItemName"> {reviews.name}</p>
      <p className="feedbackItemProf"> {reviews.profession}</p>
      <p className="feedbackItemCom">{reviews.comment}</p>
    </div>
  );
}
