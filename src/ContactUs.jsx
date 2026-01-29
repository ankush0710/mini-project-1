import React from "react";

const ContactUs = () => {
  return (
    <>
      <div id="containerDiv" className="flex flex-col md:flex-row md:flex-grows md:min-h-">
        <div id="address"
          className="flex flex-col justify-center md:flex-1 md:gap-5 md:items-center md:mt-10"
        >
          <div
            id="card-1"
            className="min-h-32 min-w-45 mx-8 my-5 py-5 px-3 shadow-lg rounded-lg md:px-8 md:py-7 bg-[#E8E2D8] md:h-56 md:w-lg"
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
            id="card-2"
            className="min-h-32 min-w-45 mx-8 my-5 py-5 px-3 shadow-lg rounded-lg md:px-8 md:py-7 bg-[#E8E2D8] md:h-56 md:w-lg"
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
        <div id="contactForm" className="m-10 md:flex-1 md:justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-600 md:text-4xl">Contact Us</h2>
          <ul className="flex flex-col gap-5 my-10">
            <li>
              <label htmlFor="Name" className="text-xl text-gray-600 font-semibold">Name: </label>
              <input type="text" for="Name"  className="w-full border-2 border-gray-300 rounded-md p-2 my-2"/>
            </li>
            <li>
              <label htmlFor="address" className="text-xl text-gray-600 font-semibold">Address: </label>
              <input type="text" for="address"  className="w-full border-2 border-gray-300 rounded-md p-2 my-2"/>
            </li>
            <li>
              <label htmlFor="contactDetails" className="text-xl text-gray-600 font-semibold">Contact Details: </label>
              <input type="number" for="contactDetails"  className="w-full border-2 border-gray-300 rounded-md p-2 my-2"/>
            </li>
            <li>
              <label htmlFor="company" className="text-xl text-gray-600 font-semibold">Company: </label>
              <input type="text" for="company"  className="w-full border-2 border-gray-300 rounded-md p-2 my-2"/>
            </li>
          </ul>
          <button type='submit' className='bg-[#008BFF] text-white font-semibold py-1 w-20 rounded-md'>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
