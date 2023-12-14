"use client";
import React, { useState } from "react";
import auth from "../../../firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div>
        <h2 className="text-2xl font-medium mb-5 text-center">Please Login</h2>
        <button
          type="button"
          onClick={() => signInWithGoogle()}
          className="btn btn-outline gap-2 max-w-xs"
        >
          <span>Continue With</span>
          <span className="flex items-center">
            <span className="text-2xl mb-1">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>le
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
