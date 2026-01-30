import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ContactUs from "./ContactUs";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
