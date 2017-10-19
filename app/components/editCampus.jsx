//dumb component
// create form
//on handle submit , sipacth the changes

import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import {dispatchUpdateCampus, dispatchGetCampus} from "../action-creators/campus";

/* -----------------    COMPONENT     ------------------ */

class EditCampus extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }


    componentDidMount() {
      
    this.props.campusData(Number(this.props.match.params.campusId));
  
  }


  render() {
      console.log(this.props.match.params)

    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
        
              
                <h1>Current Campus Name : {this.props.campus.name}</h1>
                 <div className="field">
              <label className="label">CampusName</label>
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

    event.preventDefault();

    this.props.postCampus(this.props.match.params.campusId,event.target.name.value, event.target.imageURL.value);
 
   this.props.history.push("/campuses");
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { campus: state.campus
 };
};

const mapDispatch = dispatch => {
  return {
    postCampus: (campusId, name,imageURL) => {
      const post = { name: name, imageURL: imageURL };
      dispatch(dispatchUpdateCampus(campusId,post));
    },
     campusData:(campusId)=>{
    dispatch(dispatchGetCampus(campusId))
  }
  };
};

export default connect(mapProps, mapDispatch)(EditCampus);