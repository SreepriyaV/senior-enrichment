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

   // this.state = store.getState();

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

//  componentDidMount() {
//     store.dispatch(dispatchGetCampuses());

//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

  render() {

    console.log("cam",this.props.campuses);
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

               {/* <div className="form-group">
              <ul>
                {this.state.campuses.map(campus => {
                  <div className="row" key={campus.id}>
                    <li>{campus.name}</li>
                  </div>
                })}
              </ul>
            </div> */}

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
    //const { message } = this.props;
    event.preventDefault();

    this.props.postStudent(event.target.name.value, event.target.email.value);
    console.log(event.target.name.value);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = dispatch => {
  return {
    postStudent: (name, email) => {
      const post = { name: name, imageURL: email };
      dispatch(dispatchAddStudent(post));
    },

    getCampus: dispatch(dispatchGetCampuses())
  };
};

export default connect(mapState, mapDispatch)(AddStudent);
