import { useEffect, useState } from "react";
import ShowProducts from "./ShowProducts";

export default function () {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`store.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <div className="container mx-auto m-10">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-center mb-4">
              Explore Our Store
            </h2>
            <p className="text-gray-700 text-lg text-center mb-8">
              Discover a wide range of high-quality yoga and fitness products in
              our store. From premium yoga mats to eco-friendly accessories, we
              have everything you need to enhance your practice and wellness
              journey.
            </p>
          </div>
          <div>this is products one {name}</div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ShowProducts key={product.id} product={product}></ShowProducts>
          ))}
        </div>
      </div>
    </>
  );
}
