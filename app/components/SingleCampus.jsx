import React, { Component } from "react";
import { connect } from "react-redux";

import { dispatchGetCampus } from "../action-creators/campus";



/* -----------------    COMPONENT     ------------------ */

class SingleCampus extends Component {
  constructor(props) {
    super(props);

 
  }

  componentDidMount() {
    this.props.campusData(Number(this.props.match.params.campusId));
    console.log("num",Number(this.props.match.params.campusId))
  }



  render() {
    const { campus } = this.props;
    console.log("propcampus",this.props.campus);

    return (
      <div >
        <h1><b>{campus.name}</b></h1>
        <img src={campus.imageURL} alt="Campus" height="200" width="200"/>

      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
  return { campus: state.campus };
};

const mapDispatch = dispatch => ({
  
  campusData:(campusId)=>{
    dispatch(dispatchGetCampus(campusId))
  }
});

export default connect(mapProps, mapDispatch)(SingleCampus);











