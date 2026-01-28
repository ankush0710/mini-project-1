import React from "react";

const ContactUs = () => {
  return (
    <>
      <div id="containerDiv" className="flex ">
        <div
          id="address"
          className="flex flex-col justify-center md:flex-col md:gap-10 md:m-15"
        >
          <div
            id="card-1"
            className="min-h-32 min-w-45 mx-8 my-5 py-5 px-3 shadow-lg rounded-lg md:px-8 md:py-7 bg-[#E8E2D8] md:h-60 md:w-lg"
          >
            <h2 className="text-xl font-bold text-gray-600 pb-3 md:text-3xl md:pb-6">
              NewYork Office
            </h2>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Address: 123 Main Street, New York, NY 10001
            </p>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Phone: (123) 456-7890
            </p>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Email: admin@company.com
            </p>
          </div>
          <div
            id="card-1"
            className="min-h-32 min-w-45 mx-8 my-5 py-5 px-3 shadow-lg rounded-lg md:px-8 md:py-7 bg-[#E8E2D8] md:h-60 md:w-lg"
          >
            <h2 className="text-xl font-bold text-gray-600 pb-3 md:text-3xl md:pb-6">
              NewYork Office
            </h2>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Address: 123 Main Street, New York, NY 10001
            </p>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Phone: (123) 456-7890
            </p>
            <p className="text-md md:text-xl font-semibold text-gray-600">
              Email: admin@company.com
            </p>
          </div>
        </div>
        <div id="contactForm">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <label htmlFor="Name">Name: </label>
              <input type="text" for="Name" />
            </li>
            <li>
              <label htmlFor="Name">Name: </label>
              <input type="text" for="Name" />
            </li>
            <li>
              <label htmlFor="Name">Name: </label>
              <input type="text" for="Name" />
            </li>
            <li>
              <label htmlFor="Name">Name: </label>
              <input type="text" for="Name" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
