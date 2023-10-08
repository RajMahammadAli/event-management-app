import { useEffect, useState } from "react";
import Service from "./Service";

export default function () {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("yoga.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto my-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Services We Provide</h1>
          <p className="text-gray-700 text-lg mb-8">
            Explore our range of yoga and fitness retreat services that cater to
            your wellness needs. From serene mountain getaways to beachfront
            fitness adventures, we offer experiences designed to rejuvenate your
            body and mind.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3 justify-center items-center">
          {services.map((service, idx) => (
            <Service key={idx} service={service}></Service>
          ))}
        </div>
      </div>
    </>
  );
}
