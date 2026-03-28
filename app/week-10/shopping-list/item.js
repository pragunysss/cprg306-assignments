export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      onClick={onSelect} 
      className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-slate-800 cursor-pointer text-white"
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">Buy {quantity} in {category}</div>
    </li>
  );
}