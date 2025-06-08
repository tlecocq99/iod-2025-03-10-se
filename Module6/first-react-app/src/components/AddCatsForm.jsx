import React, { useState } from "react";
import "./BigCats.css";

export default function AddCatForm({ onAdd }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !latinName.trim() || !image.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    onAdd({
      name: name.trim(),
      latinName: latinName.trim(),
      image: image.trim(),
    });
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-cat-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Cat</button>

      {/* error message*/}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
