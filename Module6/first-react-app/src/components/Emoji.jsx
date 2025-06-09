import React, { useState } from "react";
import "./Emoji.css";

export default function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prev) => !prev);
  };

  return (
    <div className="emoji-container">
      <span className="emoji-char">{isHappy ? "😃" : "😔"}</span>
      <button className="emoji-button" onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  );
}
