import React, { useEffect, useState } from "react";

function CustomerSatisfactionSection() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch(`testimonials.json`)
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            Customer Satisfaction
          </h2>
        </div>
        <div className="m-2 mx-auto flex flex-col justify-center items-center">
          {testimonials.map((testimonial) => (
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div
                key={testimonial.id}
                className="w-full md:w-[500px] m-2 p-4 bg-white rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full"
                  />
                </div>
                <p className="text-gray-600 text-center">{testimonial.text}</p>
                <p className="text-center mt-2 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-center text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerSatisfactionSection;

// className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
