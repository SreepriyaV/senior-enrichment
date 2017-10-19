import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

import { dispatchGetStudents, dispatchDeleteStudent} from "../action-creators/students";
import AddStudent from "./AddStudent";

/* -----------------    COMPONENT     ------------------ */

class students extends Component {
  constructor(props) {
    super(props);

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  onHandleChange(event) {
    console.log(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { students } = this.props;

    return (
     <div className="container is-fluid">
       <div className="notification">
        <h1> <b>Students</b> </h1>
        <ul>
          {students.map(student => {
            return (
              <div className="row" key={student.id}>
                <li>
                <Link to={`/students/${student.id}`}>  {student.name} </Link>

                   <button
                    onClick={() =>
                      this.props.deleteStudent(student.id)}
                  >
                    X
                  </button>

                </li>
              
              </div>
            );
          })}
        </ul>

        <div>
        
          <h2> <b>Add Student</b> </h2>
          <AddStudent />
        </div>

        <div>
            <Link to={"/"}><ul>home</ul></Link>
            </div>
            
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { students: state.students };
};

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(dispatchGetStudents());
  },

  deleteStudent:(studentId)=>{
    dispatch(dispatchDeleteStudent(studentId))
  }
});

export default connect(mapProps, mapDispatch)(students);
