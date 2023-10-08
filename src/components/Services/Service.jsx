import { Link } from "react-router-dom";

export default function ({ service }) {
  const { name, image, price, shortDescription, buttonText } = service;
  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="yoga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{shortDescription}</p>
            <div className="card-actions justify-end">
              <p className="pt-3">Price: {price}</p>
              <Link
                to={`/serviceDetails/${service.id}`}
                className="btn btn-primary"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
