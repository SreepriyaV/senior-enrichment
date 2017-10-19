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
        <p>Student experience is a top priority at {campus.name}. 
          We use data from our Learn platform and student feedback to make regular enhancements to every aspect of the program.
          Admiral programmers once said, “A ship in port is safe, but that is not what ships are built for. 
          Sail out to sea and do new things.” Now there's nothing between you and an exciting career in technology.
          </p>
        </div>
         <div className="students-group">
              <h1>
                <b>List of Students part of Our Program</b>
              </h1>
             
                {this.props.students.map((student,index) => {
                  return (
                    <div key={student.id}>
                  <Link to={`/students/${student.id}`} > 
                  <li  >
                      {student.name}
                    </li>
                    </Link>
                    </div>
                  );
                })}
            
            </div>


          
              <div >
            <Link to={"/campuses"}  > <ul> <font color="brown">campuses</font> </ul> </Link>
              
            </div>
            <div>
            <Link to={"/"}><ul><font color="brown">home</font></ul></Link>
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











