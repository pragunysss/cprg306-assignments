"use client";

import { useState, useEffect } from "react";
import NewItem from "./newitem";
import ItemList from "./item-list";
import MealIdeas from "./mealideas"; 
import { useUserAuth } from "../../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="bg-slate-950 min-h-screen p-6 flex justify-center items-center">
        <p className="text-white text-xl">You must be logged in to view this page.</p>
      </main>
    );
  }

  const loadItems = async () => {
    try {
      if (user?.uid) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      if (user?.uid) {
        const id = await addItem(user.uid, newItem);
        setItems([...items, { ...newItem, id }]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
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