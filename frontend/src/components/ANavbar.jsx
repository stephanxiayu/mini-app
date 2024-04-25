import React from "react";
import logo from "../assets/IRONHACK.png";
import { useState } from "react";
import LoginModal from "../components/form/loginModel.jsx";
import SignUpModal from "../components/form/signupModel.jsx";
import { Link } from "react-router-dom";
const ANavbar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenModal = () => {
    setShowSignUpModal(true);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };
  return (
    <>
      <nav className="bg-black h-40 p-10 flex items-center justify-between">
        <Link to="/">
          <img className="w-40 h-40" src={logo} alt="Logo" />
        </Link>
        <div className="space-x-4">
          <button
            onClick={handleOpenLoginModal}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Login
          </button>
          {showLoginModal && (
            <LoginModal
              onDismiss={() => setShowLoginModal(false)}
              onLoginSuccessful={() => {
                console.log("SignUp Successful");
                setShowLoginModal(false);
              }}
            />
          )}
          <button
            onClick={handleOpenModal}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Create an Account
          </button>
          {showSignUpModal && (
            <SignUpModal
              onDismiss={() => setShowSignUpModal(false)}
              onSignUpSuccessful={() => {
                console.log("SignUp Successful");
                setShowSignUpModal(false);
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default ANavbar;
