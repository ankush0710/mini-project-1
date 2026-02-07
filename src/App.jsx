import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ContactUs from "./ContactUs";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  const addUser = (users) => {
    setUser([...user, users]);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SignUp addUser = {addUser}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
