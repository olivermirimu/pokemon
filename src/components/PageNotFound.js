import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "2rem auto", textAlign: "center" }}>
        <h2>Page Not Found!</h2>
        <p>SORRY LOOOKS LIKE YOU WERE DIRECTED TO A BAD LINK.</p>
        <Link
          to="/"
          className="btn"
          style={{ backgroundColor: "var(--primary)", color: "#fff" }}
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
};
export default PageNotFound;
