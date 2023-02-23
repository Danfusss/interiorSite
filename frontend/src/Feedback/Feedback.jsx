import React from "react";
import axios from "axios";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import { useEffect, useState } from "react";

import "./Feedback.css";

export default function Feedback() {
  const [massiveReviews, massiveUse] = useState([]);
  useEffect(() => {
    axios("http://127.0.0.1:3000/getFeedback").then((res) => {
      massiveUse(res.data);
    });
  }, []);
  return (
    <div className="feedbackBox">
      <h3 className="feedbackTitle">{"WHAT PEOPLE SAY"}</h3>
      <h4 className="feedbackName">{"Words Of Our Clients"}</h4>
      <div className="feedbackItemBox">
        {massiveReviews.map((reviews, i) => (
          <FeedbackItem key={i} reviews={reviews} />
        ))}
      </div>
    </div>
  );
}
