import React, { useState } from "react";

export default function () {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add logic to send the email to your subscription service or API
    // For now, we'll just log the email to the console
    console.log(`Subscribed with email: ${email}`);

    // Clear the email input field
    setEmail("");
  };

  return (
    <div className="w-full max-w-[780px] mx-auto mt-0 md:mt-16">
      <h1>About Us</h1>
      <p>
        Welcome to our Yoga and Fitness Retreats! We are passionate about
        promoting well-being and healthy living through yoga, fitness, and
        mindfulness. Our team of dedicated instructors and professionals is here
        to guide you on your journey to a healthier and more balanced life.
      </p>
      <p>
        Join us for transformative retreats in stunning natural settings, where
        you can reconnect with your inner self, improve your physical fitness,
        and find peace and serenity in the midst of nature.
      </p>
      <p>
        Subscribe to our newsletter to stay updated on our latest retreats,
        wellness tips, and special offers.
      </p>
      <div className="my-10">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
