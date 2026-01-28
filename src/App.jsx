import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center items-center h-screen">
          <SignUp />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
