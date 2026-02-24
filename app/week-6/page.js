"use client";
import { useState } from "react";
import NewItem from "./newitem";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData); 

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
<main className="bg-slate-950 min-h-screen p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} /> 
    </main>
  );
}