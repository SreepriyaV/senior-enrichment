import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from "./home.jsx"
import campuses from "./campuses.jsx"
import campus from "./campuses.jsx"
import students from "./students.jsx"
 import SingleCampus from "./SingleCampus.js"


export default class Root extends Component {

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
    
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path={"/"} component={home} />
              <Route   path={"/campuses"} component={campuses} />
                <Route   path={"/students"} component={students} />
                 <Route  path={"/campuses/:campusId"} component={SingleCampus}/> 
           
             
            </Switch>
          </div>
    
        </div>
    </Router>
    );
  }
}