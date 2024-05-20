"use client";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center">
      <h1 className=" text-red-700">Something went wrong !</h1>
      <h2 className="text-red-800">{error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
