
export default function Filters({ products, setFilters }) {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="filters">
      <input placeholder="Type Name.."
        onChange={e => setFilters(f => ({ ...f, search: e.target.value }))} />

      <select onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}>
        <option value="">All Categories</option>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>

      <select onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={() => setFilters({ search: "", category: "", sort: "" })}>
        Clear all filters
      </button>
    </div>
  );
}
