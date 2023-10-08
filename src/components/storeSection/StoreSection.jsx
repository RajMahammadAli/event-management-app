import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import { useNavigate } from "react-router-dom";

export default function () {
  const [storeProducts, setStoreProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`store.json`)
      .then((res) => res.json())
      .then((data) => setStoreProducts(data.products));
  }, []);
  return (
    <>
      <div className="container mx-auto my-16">
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
        <div className="grid md:grid-cols-3 gap-4">
          {storeProducts.map((storeProduct) => (
            <StoreCard
              key={storeProduct.id}
              storeProduct={storeProduct}
            ></StoreCard>
          ))}
        </div>
        <div className="w-full mt-6 flex justify-center">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/store")}
          >
            See more
          </button>
        </div>
      </div>
    </>
  );
}
