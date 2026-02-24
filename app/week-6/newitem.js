"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.random().toString(36).substring(2, 9);

    const item = { id, name, quantity, category };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

return (
    <div className="flex justify-center w-full mb-6">
      <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 max-w-sm w-full rounded-lg shadow-lg">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md border-2 border-gray-300 text-white focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex justify-between gap-2">
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          
            className="w-20 p-2 rounded-md border-2 border-gray-300 text-white focus:outline-none focus:border-orange-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          
            className="p-2 rounded-md border-2 border-gray-300 text-white focus:outline-none focus:border-orange-500"
          >
            <option className ="text-black" value="produce">Produce</option>
            <option className="text-black" value="dairy">Dairy</option>
            <option className="text-black" value="bakery">Bakery</option>
            <option className="text-black" value="produce">Produce</option>
            <option className="text-black" value="dairy">Dairy</option>
  <         option  className="text-black" value="bakery">Bakery</option>
            <option className="text-black" value="meat">Meat</option>
            <option className="text-black" value="frozen foods">Frozen Foods</option>
            <option className="text-black" value="canned goods">Canned Goods</option>
            <option className="text-black" value="dry goods">Dry Goods</option>
            <option className="text-black" value="beverages">Beverages</option>
            <option className="text-black" value="snacks">Snacks</option>
            <option className="text-black" value="household">Household</option>
            <option className="text-black" value="other">Other</option>
            {/* ... other options ... */}
          </select>
        </div>

        <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
          +
        </button>
      </form>
    </div>
);
}