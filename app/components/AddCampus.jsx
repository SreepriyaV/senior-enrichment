import React from "react";
import { connect } from "react-redux";
import { dispatchAddCampus } from "../action-creators/campuses";

/* -----------------    COMPONENT     ------------------ */

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
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
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">ImageURL</label>
              <div className="control">
                <input
                  name="imageURL"
                  type="imageURL"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    //const { message } = this.props;
    event.preventDefault();
   
    this.props.postCampus(event.target.name.value, event.target.imageURL.value);
    console.log(event.target.name.value);
     alert('A Campus was Added: ' + event.target.name.value);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = dispatch => {
  return {
    postCampus: (name, imageURL) => {
      const post = { name: name, imageURL: imageURL };
      dispatch(dispatchAddCampus(post));
    }
  };
};

export default connect(mapState, mapDispatch)(AddCampus);
