"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // New state
  const [error, setError] = useState(null);     // New state

  const loadMealIdeas = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } catch (err) {
      setError("Failed to load meal ideas. Big L.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Conditional Rendering Logic
  if (!ingredient) return <p className="text-white">Select an item to see meal ideas.</p>;
  if (loading) return <p className="text-white">Loading meal ideas... 🔄</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="grid grid-cols-1 gap-2">
        {meals.length === 0 ? (
          <p className="text-white">No meal ideas found for this ingredient.</p>
        ) : (
          meals.map((meal) => (
            <li key={meal.idMeal} className="p-3 bg-slate-800 text-white rounded-lg hover:bg-orange-600 transition-all">
              {meal.strMeal}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}