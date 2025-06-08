import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
// This creates a new component as a function that returns some JSX.
export function App() {
  return (
    <div className="App">
      {/* Greeting components (Exercise 1) */}
      <div>
        <Greeting />
        <Greeting name="John" />
        <Greeting name="Jane">
          <p>This is a child element inside the Greeting component.</p>
        </Greeting>
      </div>
      <header>
        <h1>Big Cats Gallery</h1>
      </header>
      {/* BigCats component (Exercise 2*/}
      <BigCats />
      <h1>The Changing of the Moods</h1>
      <Emoji />
    </div>
  );
}

export default App;
