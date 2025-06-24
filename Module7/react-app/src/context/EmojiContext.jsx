import { createContext, useState } from "react";

const EmojiContext = createContext();
export default EmojiContext;

export function EmojiProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true);
  const toggleMood = () => setIsHappy((h) => !h);
  const emoji = isHappy ? "😃" : "😔";

  return (
    <EmojiContext.Provider value={{ emoji, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
}
