import React, { useState } from "react";
import "./Emoji.css"; // optional, for styling

export default function Emoji() {
  // start “happy”
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prev) => !prev);
  };

  return (
    <div className="emoji-container">
      {/* big emoji, change the two characters as you like */}
      <span className="emoji-char">{isHappy ? "😃" : "😔"}</span>
      <button className="emoji-button" onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  );
}
