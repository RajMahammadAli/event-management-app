import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
  const details = useLoaderData();
  const { id } = useParams();
  const currentId = parseInt(id);
  const allServices = details.services;
  const singleService = allServices.find((service) => service.id === currentId);
  console.log(singleService);

  const handleEnrollBtn = () => {
    toast("Thank You for Enrollment", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl my-7">
          <figure>
            <img src={singleService.image} alt="Service Details" />
          </figure>
          <div className="card-body w-1/2 mx-auto">
            <h2 className="card-title">{singleService.name}</h2>
            <p>{singleService.longDescription}</p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">
                Course Fee: {singleService.price}
              </button>
              <button onClick={handleEnrollBtn} className="btn btn-primary">
                Enroll Now
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
