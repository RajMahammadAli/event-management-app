export default function ({ product }) {
  const { name, description, price, image } = product;
  return (
    <>
      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="store" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
