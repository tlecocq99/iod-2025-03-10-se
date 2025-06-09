import React, { useState, useMemo } from "react";
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
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDsec, setSortDsec] = useState(false);
  const [sortPanthera, setSortPanthera] = useState(false);
  // add a new cat, incrementing ID
  const handleAdd = ({ name, latinName, image }) => {
    setCats((prev) => [...prev, { id: nextId, name, latinName, image }]);
    setNextId((prev) => prev + 1);
  };

  // delete by id
  const handleDelete = (id) => {
    setCats((prev) => prev.filter((cat) => cat.id !== id));
  };

  // sorting & filtering (always operate on full list for independent filters)
  const toggleSortAsc = () => setSortAsc((prev) => !prev);
  const toggleSortDesc = () => setSortDsec((prev) => !prev);
  const toggleSortPanthera = () => setSortPanthera((prev) => !prev);
  const resetList = () => {
    setSortAsc(false);
    setSortDsec(false);
    setSortPanthera(false);
    setCats(initialCats);
  };

  const displayedCats = useMemo(() => {
    let list = [...cats];
    if (sortPanthera) {
      list = list.filter((cat) => cat.latinName.startsWith("Panthera "));
    }
    if (sortAsc && !sortDsec) {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (!sortAsc && sortDsec) {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [cats, sortAsc, sortDsec, sortPanthera]);

  return (
    <div>
      <div className="bigcats-controls">
        <button className={sortAsc ? "active" : ""} onClick={toggleSortAsc}>
          Sort A–Z
        </button>
        <button className={sortDsec ? "active" : ""} onClick={toggleSortDesc}>
          Sort Z-A
        </button>
        <button
          className={sortPanthera ? "active" : ""}
          onClick={toggleSortPanthera}
        >
          Panthera Only
        </button>
        <button onClick={resetList}>Reset List</button>
      </div>

      <AddCatForm onAdd={handleAdd} />

      <ul className="bigcats-list">
        {displayedCats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
