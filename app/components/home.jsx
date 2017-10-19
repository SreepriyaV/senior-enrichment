import React, { Component } from "react";
import { Link } from "react-router-dom";

const home = function(props) {
  return (
    <div>
      <h1>Welcome to The Land of Coding</h1>

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
