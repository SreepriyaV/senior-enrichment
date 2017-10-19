import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./home.jsx";
import campuses from "./campuses.jsx";
import campus from "./campuses.jsx";
import students from "./students.jsx";
import SingleCampus from "./SingleCampus.jsx";
import SingleStudent from "./SingleStudent.jsx";
import editCampus from "./editCampus.jsx";
import editStudent from "./editStudent.jsx";

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2" />
          <div className="col-xs-10">
            <Switch>
              <Route exact path={"/"} component={home} />
                 
              <Route path={"/campuses/:campusId/edit"} component={editCampus}/>
        
              <Route path={"/campuses/:campusId"} component={SingleCampus} />
              
              <Route path={"/campuses"} component={campuses} /> 
               {/*deletion of each campus and adding a campus (AddCampus Component) is happening in the campuses component */}
                 <Route path={"/students/:studentId/edit"} component={editStudent}/>
              <Route path={"/students/:studentId"} component={SingleStudent} />
              <Route path={"/students"} component={students} />
              {/*deletion of each Student and adding a student (AddStudent Component) is happening in the students component */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
