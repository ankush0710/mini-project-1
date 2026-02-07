import React, {useState} from "react";

const SignUp = ({addUser}) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
      nameError : "",
      emailError : "",
      passwdError : ""
    });
    const [formValid, setFormValid] = useState(false);

    // Function to validate the username 
    const validateName = (name)=>{
      let nameError = error.nameError;
      let isValid = formValid;

      if(name.trim().length < 3){
        nameError = "Username should be more than 3 charachters";
        isValid = false;
      }
      else if(/([^A-Za-z0-9])\w+/.test(name)){
        nameError = "Username should contain atleast one uppercase and one special character";
        isValid = false;
      }
      else{
        nameError = "";
        isValid = true;
      }

      setUserName(name.trim());
      setError({...error, nameError});
      return isValid;
    }

    // function for validating email address 
    const validateEmail = (email) => {
      let emailError = error.emailError;
      let pattern = /[A-Za-z0-9._%+-]+@+[A-Za-z0-9._]+\.[A-Za-z]/;
      let isValid = formValid;

      if(!pattern.test(email)){
        emailError = "Email is Invalid..Please Enter Valid Email";
        isValid = false;
      }
      else{
        emailError = "";
        isValid = true;
      }

      setEmail(email.trim());
      setError({...error, emailError});
      return isValid;
    };

    const validatePaswd = (password) =>{
      let passwdError = error.passwdError;
      let isValid = formValid;
      if(password.length < 8){
        passwdError = "Password must be more than 8 characters";
        isValid = false;
      }
      else{
        passwdError = "";
        isValid = true;
      }

      setPassword(password);
      setError({...error, passwdError});
      return isValid;
    };

    const handleChange = (e) =>{
      if(e.target.id == "userName"){
        validateName(e.target.value);
      }
      else if(e.target.id == "email"){
        validateEmail(e.target.value);
      }
      else if(e.target.id == "passwd1"){
        validatePaswd(e.target.value);
      }
      else if(e.target.id == "passwd2"){
        validatePaswd(e.target.value);  
      }
    }

    const handleSubmitt = (e) =>{
      e.preventDefault();
      if(validateName(userName) &&
        validateEmail(email) && 
        validatePaswd(password)){
          const newUser = {userName, email, password}
          addUser(newUser);
          setUserName("");
          setEmail("");
          setPassword("");

          console.log(newUser);
        }
    }

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
            id="userName"
            onChange={handleChange}
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userName}
          />
          <p className="text-red-500">{error.nameError}</p>
          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            id="email"
            onChange={handleChange}
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
          />
          <p className="text-red-500">{error.emailError}</p>

          <label htmlFor="passwd1" className="text-lg font-semibold">
            New Password:
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="passwd1"
            id="passwd1"
            onChange={handleChange}
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
          />
          <p className="text-red-500">{error.passwdError}</p>

          <label htmlFor="passwd2" className="text-lg font-semibold">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="passwd2"
            id="passwd2"
            onChange={handleChange}
            className="bg-white rounded-sm px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500">{error.passwdError}</p>

          <div className="flex gap-2">
            <button
              type="submit"
              onClick={handleSubmitt}
              className="bg-[#008BFF] text-lg text-white font-semibold py-2 px-3 w-40 mt-5 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
