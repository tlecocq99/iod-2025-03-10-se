import React, { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatsForm";
import "./BigCats.css";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/h/cheetah_2_1.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://media.istockphoto.com/id/682954094/photo/mountain-lion.jpg?s=1024x1024&w=is&k=20&c=8-wNKGOzISHiCbq0jgfvbBEh2A1qg-5HAPjl8dTx4_w=",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/African_leopard_male_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://cdn.britannica.com/29/150929-004-4E4D59AF/lion-Kenya-Masai-Mara-National-Reserve.jpg?s=1500x700&q=85",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://cdn.britannica.com/52/170952-004-5860D55F/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg?s=1500x700&q=85",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://indiabiodiversity.org/files-api/api/get/crop/img//Panthera tigris tigris/Panthera_tigris_3.jpg?h=500",
  },
];

export default function BigCats() {
  const [cats, setCats] = useState(initialCats);
  const [nextId, setNextId] = useState(initialCats.length + 1);

  // add a new cat, incrementing ID
  const handleAdd = ({ name, latinName, image }) => {
    setCats([...cats, { id: nextId, name, latinName, image }]);
    setNextId(nextId + 1);
  };

  // delete by id
  const handleDelete = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  // sorting & filtering (always operate on full list for independent filters)
  const sortAlpha = () =>
    setCats([...initialCats].sort((a, b) => a.name.localeCompare(b.name)));
  const reverseList = () => setCats([...initialCats].reverse());
  const filterPanthera = () =>
    setCats(initialCats.filter((cat) => cat.latinName.startsWith("Panthera")));
  const resetList = () => setCats(initialCats);

  return (
    <div>
      <div className="bigcats-controls">
        <button onClick={sortAlpha}>Sort A–Z</button>
        <button onClick={reverseList}>Reverse</button>
        <button onClick={filterPanthera}>Panthera Only</button>
        <button onClick={resetList}>Reset</button>
      </div>

      <AddCatForm onAdd={handleAdd} />

      <ul className="bigcats-list">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
