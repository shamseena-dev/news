import React from "react";
import "./default404.scss";
import { Link } from "react-router-dom";

function Default404() {
  return (
    <div className="container page-container">
      <div className="default-msg">
        <h4>
          <span className="red-color"> 404 Error!! Not Found!! </span>
          <br />
        </h4>
        <h6>Looks like this page does not exist.</h6>
        <p>
          Goto <Link to="/home">Home</Link>
        </p>

       
      </div>
    </div>
  );
}

export default Default404;
