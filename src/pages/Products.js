import { useEffect, useMemo, useState } from "react";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    sort: ""
  });

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  // Apply search + category + sort together
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search by name
    if (filters.search) {
      list = list.filter(p =>
        p?.title
          ?.toLowerCase()
          .includes(filters.search.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category) {
      list = list.filter(p => p?.category === filters.category);
    }

    // Sort by price
    if (filters.sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, filters]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <Filters
        products={products}
        filters={filters}
        setFilters={setFilters}
      />

      <ProductGrid products={filteredProducts} />
    </>
  );
}
