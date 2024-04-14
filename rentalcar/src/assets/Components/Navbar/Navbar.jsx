import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import "./Navbar.css";


function Navbar() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignInClick = () => {
    setShowSignInPopup(true);
    setShowRegisterPopup(false);
  };

  const handleRegisterClick = () => {
    setShowSignInPopup(false);
    setShowRegisterPopup(true);
  };

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setShowSignInPopup(false);
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    setShowRegisterPopup(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  const scrollTop = () => {
    scroll.scrollToTop({ smooth: true, duration:500 });
  };

  return (
    
    <div className="navbar">
      <h1>GearMax</h1>
      <nav>
      <a href="#" onClick={scrollTop} id="nodec"><p>Home</p></a>
        
        <Link to="hereAbout" smooth={true}>
         <p> About</p>
        </Link>
        <Link to="list" smooth={true}>
         <p> Our Team</p>
        </Link>
        <Link to="contacts" smooth={true}>
         <p> Contact</p>
        </Link>
        <div className="logins">
          <button onClick={handleSignInClick}>Sign in</button>
          <button onClick={handleRegisterClick} className="register">Register</button>
          <br />
          <br />
        </div>
      </nav>

      {showSignInPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Sign In</h2>
            <p>Email:</p>
            <input
              id="signup"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password:</p>
            <input
              id="signup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={() => setShowSignInPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showRegisterPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Register</h2>
            <p>Email:</p>
            <input
              id="register"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password:</p>
            <input
              id="register"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Confirm Password:</p>
            <input
              id="register"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setShowRegisterPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
