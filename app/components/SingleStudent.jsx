import React, { Component } from "react";
import { connect } from "react-redux";

import { dispatchGetStudent} from "../action-creators/student";



/* -----------------    COMPONENT     ------------------ */

class SingleStudent extends Component {
  constructor(props) {
    super(props);

 
  }

  componentDidMount() {
    this.props.studentData(Number(this.props.match.params.studentId));
    console.log("num",Number(this.props.match.params.studentId))
  }



  render() {
    const { student } = this.props;
    console.log("propStudent",this.props.student);

    return (
      <div >
        <h1><b>{student.name}</b></h1>
        <h2>{student.email}</h2>

      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { student: state.student };
};

const mapDispatch = dispatch => ({
  
  studentData:(studentId)=>{
    dispatch(dispatchGetStudent(studentId))
  }
});

export default connect(mapProps, mapDispatch)(SingleStudent);
