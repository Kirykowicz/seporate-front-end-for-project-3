import { useState, useEffect } from "react";

export default function Item() {
  const [foodItems, setFoodItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9292/items`)
      .then((res) => res.json())
      .then((res) => {
        setFoodItems(res);
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();

    let addItem = {
      name: newItem,
    };

    fetch(`http://localhost:9292/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then(console.log);

    setFoodItems([addItem, ...foodItems]);
  };

  return (
    <div>
      <h1>ITEM</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newItem}
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add New Item</button>
      </form>
      <ul>
        {foodItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
