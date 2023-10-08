export default function ({ storeProduct }) {
  const { name, description, price, image } = storeProduct;
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={image} alt="products" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
