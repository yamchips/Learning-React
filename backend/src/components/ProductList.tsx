import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in", category);
    setProducts(["clothing", "household"]);
  }, [category]);
  // second parameter is an array of dependencies, any element changes, react will rerun this useEffect function. An empty array means this effect doesn't depend on any values, so it will be run only once.
  return <div>ProductList</div>;
};

export default ProductList;
