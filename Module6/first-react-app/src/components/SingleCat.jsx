import React from "react";
import "./BigCats.css";

export default function SingleCat({ cat, onDelete }) {
  return (
    <li className="cat-item">
      <img src={cat.image} alt={cat.name} className="cat-image" />
      <h2 className="cat-name">{cat.name}</h2>
      <p className="cat-latin">
        <em>{cat.latinName}</em>
      </p>
      <button className="delete-button" onClick={() => onDelete(cat.id)}>
        Delete
      </button>
    </li>
  );
}
