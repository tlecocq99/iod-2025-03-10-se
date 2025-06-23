import React from "react";
import { useEmoji } from "../context/EmojiContext.jsx";
import "./Emoji.css";

export default function Emoji() {
  const { emoji, toggleMood } = useEmoji();
  return (
    <div className="emoji-container">
      <span className="emoji-char">{emoji}</span>
      <button className="emoji-button" onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  );
}
