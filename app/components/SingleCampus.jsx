import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { dispatchGetCampus } from "../action-creators/campus";
import {dispatchGetCampusStudents} from "../action-creators/students"



/* -----------------    COMPONENT     ------------------ */

class SingleCampus extends Component {
  constructor(props) {
    super(props);

 
  }

  componentDidMount() {
      this.props.studentsData(Number(this.props.match.params.campusId));
    this.props.campusData(Number(this.props.match.params.campusId));
  
    //console.log("num",Number(this.props.match.params.campusId))
  }



  render() {
    const { campus } = this.props;

   console.log("propstudents",this.props.students);

    return (
      <div >
        <div>
          <Link to={`/campuses/${campus.id}/edit`}><h3>Edit</h3></Link>
          <h1><b>Campus:</b></h1> 

        <h1><b>{campus.name}</b></h1>
        <img src={campus.imageURL} alt="Campus" height="200" width="200"/>
        </div>
         <div className="students-group">
              <h1>
                <b>Students</b>
              </h1>
             
                {this.props.students.map((student) => {
                  return (
                  <Link to={`/campuses/students/${student.id}/edit`} > 
                  <li key={student.id} >
                      {student.name}
                    </li>
                    </Link>
                  );
                })}
            
            </div>

      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { campus: state.campus,
  students: state.students };
};

const mapDispatch = dispatch => ({
  
  campusData:(campusId)=>{
    dispatch(dispatchGetCampus(campusId))
  },

  studentsData:(campusId)=>{
    dispatch(dispatchGetCampusStudents(campusId))
  }
});

export default connect(mapProps, mapDispatch)(SingleCampus);











