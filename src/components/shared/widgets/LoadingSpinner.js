import React from "react";
import "../shared.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container fade">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* <span className="loading-text">Text</span> */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
