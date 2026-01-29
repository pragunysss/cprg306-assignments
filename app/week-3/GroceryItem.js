export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 m-4 max-w-sm bg-slate-900 border border-slate-500 rounded-md text-white list-none">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}   