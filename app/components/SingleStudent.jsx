import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { dispatchGetStudent } from "../action-creators/student";


/* -----------------    COMPONENT     ------------------ */

class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.studentData(Number(this.props.match.params.studentId));
  }

  render() {
    const { student } = this.props;
    console.log("Student", this.props.student);
    if (this.props.student.campus)
      console.log("campus", this.props.student.campus.name);
    return (
      <div>
        <h1><b><font color="red">Student Details</font></b></h1>
        <Link to={`/students/${student.id}/edit`}><h3>Edit</h3></Link>
        <h1>
          <b>Name: </b>{student.name}
        </h1>
        <h2><b>Email:</b> {student.email}</h2>

        {this.props.student.campus && (
       <Link to={`/campuses/${this.props.student.campus.id}`}>   <h2>
            <b>Campus Name: </b>{student.campus.name}
          </h2></Link>
        )}

        {this.props.student.campus && (
          <img
            src={student.campus.imageURL}
            alt="Campus"
            height="200"
            width="200"
          />
        )}

        <div >
            <Link to={"/students"}  > <ul> <font color="brown">students</font> </ul> </Link>
              
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
  return {
    student: state.student
    // campus: state.campus
  };
};

const mapDispatch = dispatch => ({
  studentData: studentId => {
    dispatch(dispatchGetStudent(studentId));
  }
 
});

export default connect(mapProps, mapDispatch)(SingleStudent);
