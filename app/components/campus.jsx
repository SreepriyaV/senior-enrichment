import React, { Component } from "react";
import { connect } from "react-redux";

import { dispatchGetStudents } from "../action-creators/students";

/* -----------------    COMPONENT     ------------------ */

class students extends Component {
  constructor(props) {
    super(props);

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const campusId = Number(this.props.match.params.campusId);
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
      <div className="container story-container">
        <ul className="list-inline large-font">
          <li>
            <select onSubmit={this.onSubmit} onChange={this.onHandleChange}>
              {students.map(student => (
                <option key={student.id} value={student.name}>
                  {student.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: campus => {
    dispatch(dispatchGetStudents(campus));
  }
});

export default connect(mapProps, mapDispatch)(students);
