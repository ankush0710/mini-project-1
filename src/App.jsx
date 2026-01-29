import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ContactUs from "./ContactUs";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <div className="">
          <ContactUs />
        </div> */}
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
