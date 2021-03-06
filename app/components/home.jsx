import React, { Component } from "react";
import { Link } from "react-router-dom";

const home = function(props) {
  return (
    <div>
      <h1>Welcome to The Land of Coding</h1>
      <img
        src="https://centerforcreativity.net/wp-content/uploads/2017/10/Kids_coding-1456433921.jpg"
        alt="Campus"
        height="500"
        width="500"
      />
      <Link to={"/campuses"}>
        <li>Campuses</li>
      </Link>
      <Link to={"/students"}>
        <li>Students</li>
      </Link>
    </div>
  );
};

export default home;
