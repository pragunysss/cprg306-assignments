"use client";

import { useState } from "react";
import NewItem from "./newitem";
import ItemList from "./item-list";
import MealIdeas from "./mealideas"; 
import itemsData from "./items.json"; 
import { useUserAuth } from "../../../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="bg-slate-950 min-h-screen p-6 flex justify-center items-center">
        <p className="text-white text-xl">You must be logged in to view this page.</p>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();
    
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-950 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">

        <div className="flex-1">
          <div className="mb-4">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>

      </div>
    </main>
  );
}