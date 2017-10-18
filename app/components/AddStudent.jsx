//dumb component
// create form
//on handle submit , sipacth the changes

import React from "react";
import { connect } from "react-redux";
import { dispatchAddStudent } from "../action-creators/students";
import store from "../store";
import { dispatchGetCampuses } from "../action-creators/campuses";

/* -----------------    COMPONENT     ------------------ */

class AddStudent extends React.Component {
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
  }

  onSelectSubmit(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    //console.log("cam", this.props.campuses);
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>name</label>
              <input
                name="name"
                type="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <h1>
                <b>Campuses</b>
              </h1>
              <select onChange={this.onSelectSubmit}>
                {this.props.campuses.map(campus => {
                  return (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <button type="submit" className="btn btn-block btn-primary">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    event.preventDefault();

    this.props.postStudent(
      event.target.name.value,
      event.target.email.value,
      this.state.id
    );
    console.log(event.target.name.value,event.target.email.value,this.state.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { campuses: state.campuses };
};

const mapDispatch = dispatch => {
  return {
    postStudent: (name, email, campusId) => {
      const post = { name: name, email: email, campusId: campusId };
      dispatch(dispatchAddStudent(post));
    },

    getCampuses: () => {
      dispatch(dispatchGetCampuses());
    }
  };
};

export default connect(mapProps, mapDispatch)(AddStudent);
