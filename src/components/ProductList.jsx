import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Apple", category: "Produce" }
];

function ProductList({ addToCart, category }) {

  const filteredProducts =
    !category || category === "All"
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase() === category.toLowerCase()
        );

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;