import { useState } from "react";
import "./App.css";
import Greeting from "../components/Greeting";
// This creates a new component as a function that returns some JSX.
function App() {
  return (
    <>
      <div>
        <Greeting />
        <Greeting name="John" />
        <Greeting name="Jane">
          <p>This is a child element inside the Greeting component.</p>
        </Greeting>
      </div>
    </>
  );
}
{
  /* Renders the Welcome component with
a name prop and a child (nested)
element */
}

export default App;
