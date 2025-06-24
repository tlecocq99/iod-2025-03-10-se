import React, { createContext, useState, useContext } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true);
  const toggleMood = () => setIsHappy((prev) => !prev);
  const emoji = isHappy ? "😃" : "😔";

  return (
    <EmojiContext.Provider value={{ emoji, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmoji() {
  const ctx = useContext(EmojiContext);
  if (!ctx) throw new Error("useEmoji must be used within EmojiProvider");
  return ctx;
}
