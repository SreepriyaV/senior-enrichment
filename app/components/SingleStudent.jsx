import React, { Component } from "react";
import { connect } from "react-redux";

import { dispatchGetStudent } from "../action-creators/student";
// import { dispatchGetCampus } from "../action-creators/campus";

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
        <h1>
          <b>Name: </b>{student.name}
        </h1>
        <h2><b>Email:</b> {student.email}</h2>

        {this.props.student.campus && (
          <h2>
            <b>Campus Name: </b>{student.campus.name}
          </h2>
        )}

        {this.props.student.campus && (
          <img
            src={student.campus.imageURL}
            alt="Campus"
            height="200"
            width="200"
          />
        )}
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
  // campusData: campusId => {
  //   dispatch(dispatchGetCampus(campusId));
  // }
});

export default connect(mapProps, mapDispatch)(SingleStudent);
