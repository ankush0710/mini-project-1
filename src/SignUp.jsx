import React from "react";

const SignUp = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        id="card"
        className="bg-[#94B4C1] w-full lg:w-xl shadow-lg rounded-lg mx-10"
      >
        <div
          id="heading"
          className="flex justify-center items-center border-b border-gray-500 py-5 px-2"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Create Account</h2>
        </div>
        <div id="form" className="flex flex-col px-3 py-5 gap-2">
          <label htmlFor="userName" className="text-lg font-semibold">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter Your Username"
            name="userName"
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <p className="text-red-500">Username should be more than 3 characters</p> */}
          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <p className="text-red-500">Username should be more than 3 characters</p> */}

          <label htmlFor="passwd1" className="text-lg font-semibold">
            New Password:
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="passwd1"
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <p className="text-red-500">Username should be more than 3 characters</p> */}

          <label htmlFor="passwd2" className="text-lg font-semibold">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="passwd2"
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <p className="text-red-500">Username should be more than 3 characters</p> */}

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#008BFF] text-lg text-white font-semibold py-2 px-3 w-40 mt-5 rounded-md"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
