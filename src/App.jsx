import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <SignUp />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
