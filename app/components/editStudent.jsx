//dumb component
// create form
//on handle submit , sipacth the changes

import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { dispatchAddStudent } from "../action-creators/students";
import store from "../store";
import { dispatchGetCampuses } from "../action-creators/campuses";
import { dispatchUpdateStudent } from "../action-creators/student";
import { dispatchGetStudent } from "../action-creators/student";

/* -----------------    COMPONENT     ------------------ */

class EditStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };

    this.onSelectSubmit = this.onSelectSubmit.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses(dispatchGetCampuses());
    this.props.studentData(Number(this.props.match.params.studentId));
  }

  onSelectSubmit(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    //console.log("cam", this.props.campuses);
    const student = this.props.student;
    console.log("nam", student.name);
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  type="name"
                  placeholder={student.name}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  placeholder={student.email}
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Campuses</label>
              <div className="control">
                <div className="select">
                  <select onChange={this.onSelectSubmit}>
                    {this.props.campuses ? (
                      this.props.campuses.map(campus => {
                        return (
                          <option key={campus.id} value={campus.id}>
                            {campus.name}
                          </option>
                        );
                      })
                    ) : null}
                  </select>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
          <div>
            <Link to={`/students/${this.props.match.params.studentId}`}>
              <ul>
                <font color="brown">student</font>
              </ul>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <ul>
                <font color="brown">home</font>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    event.preventDefault();

    this.props.putStudent(
      this.props.match.params.studentId,
      event.target.name.value,
      event.target.email.value,
      this.state.id
    );

    alert("A Student was Edited: " + event.target.name.value);
    this.props.history.push("/");
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return {
    campuses: state.campuses,
    student: state.student
  };
};

const mapDispatch = dispatch => {
  return {
    putStudent: (studentId, name, email, campusId) => {
      const put = { name: name, email: email, campusId: campusId };
      dispatch(dispatchUpdateStudent(studentId, put));
    },

    getCampuses: () => {
      dispatch(dispatchGetCampuses());
    },

    studentData: studentId => {
      dispatch(dispatchGetStudent(studentId));
    }
  };
};

export default connect(mapProps, mapDispatch)(EditStudent);
