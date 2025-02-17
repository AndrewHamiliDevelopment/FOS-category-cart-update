<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function LoginSignup() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Login or Signup</h2>
      <button style={{ margin: '10px', padding: '10px' }}>
        <Link to="/login">Login</Link>
      </button>
      <button style={{ margin: '10px', padding: '10px' }}>
        <Link to="/signup">Signup</Link>
      </button>
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

function LoginSignup({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility for "Password" field
  const [showReEnterPassword, setShowReEnterPassword] = useState(false); // For toggling password visibility for "Re-enter Password" field
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        localStorage.setItem('user-info', JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleSignUp = async () => {
    if (password !== reEnterPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        mobile: mobile,
        password: password
      });

      if (response.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (error) {
      setError("Error during sign-up. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          background: 'white',
          width: '380px',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '24px',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          &times;
        </button>

        <img
          src="mcdonalds.png"
          alt="McDonald's Logo"
          style={{ width: '60px', display: 'block', margin: '0 auto 10px' }}
        />
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
          {isSignUp ? 'Sign Up' : 'Log In'}
        </h2>
        <p>{isSignUp ? 'Create a new account' : 'Sign in to your account'}</p>

        {isSignUp && (
          <>
            <input
              type="text"
              placeholder="First Name"
              style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showReEnterPassword ? "text" : "password"}
                placeholder="Re-enter Password"
                style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
                onClick={() => setShowReEnterPassword(!showReEnterPassword)}
              >
                {showReEnterPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </div>
            </div>
          </>
        )}

        {!isSignUp && (
          <>
            <input
              type="email"
              placeholder="Email"
              style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ width: '95%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </div>
            </div>
          </>
        )}

        <div style={{ marginBottom: '10px' }}>
          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        </div>

        {isSignUp ? (
          <button
            onClick={handleSignUp}
            style={{ width: '100%', background: 'gray', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={handleLogin}
            style={{ width: '100%', background: 'gray', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}
          >
            Log In
          </button>
        )}
           <Link
            to="#"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ fontSize: '14px', color: 'blue' }}
          >
            {isSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
          </Link>

        <div style={{ marginTop: '10px' }}>
          <Link
            to="#"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ fontSize: '14px', color: 'blue' }}
          >
             Forgot Password?
          </Link>
        </div>
      </div>
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
    </div>
  );
}

export default LoginSignup;
