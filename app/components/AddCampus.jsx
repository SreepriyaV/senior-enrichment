//dumb component
// create form 
//on handle submit , sipacth the changes 


import React from "react";
import { connect } from "react-redux";
import {dispatchAddCampus} from "../action-creators/campuses"

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
              <label>imageURL</label>
              <input
                name="imageURL"
                type="imageURL"
                className="form-control"
                required
              />
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
   
    this.props.postCampus(event.target.name.value, event.target.imageURL.value);
   console.log(event.target.name.value);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null

const mapDispatch = (dispatch)=>{

  return {

      postCampus:(name,imageURL)=>{
      const post=  {name: name,imageURL: imageURL}
        dispatch(dispatchAddCampus(post))

      }

  }

};

export default connect(mapState, mapDispatch)(AddCampus);
