import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import store from '../store';


import { dispatchGetCampuses } from '../action-creators/campuses';

/* -----------------    COMPONENT     ------------------ */

 class campuses extends Component {
  constructor(props) {
    super(props);

  
        this.state = store.getState();

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount () {
    this.props.fetchInitialData();
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()));

  }

onHandleChange(event){
  
console.log(event.target.value);

 //console.log(this.campusId);


}


onSubmit(event){
  event.preventDefault();
}

    
  

  render() {
 
   
    const {campuses} = this.props;
 
    console.log(campusId)
    //console.log(campuses);
  
   
    
    return (
      <div className="container story-container">
        <ul className="list-inline large-font">
          
          <li>
            
            <select
             onSubmit={this.onSubmit}
              onChange={this.onHandleChange}>
            {
              campuses.map(campus => (
        <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))
            }
            </select>
          
           
          </li>
        </ul>
       
      </div>
    );


 
  }


}

/* -----------------    CONTAINER     ------------------ */


const mapProps = (state)=>{
  return {campuses: state.campuses
    
  }
};

const mapDispatch = dispatch => ({
  
  fetchInitialData: () => {
  
    dispatch(dispatchGetCampuses());
    
  }
});


 export default connect(mapProps, mapDispatch)(campuses);



// export default class campuses extends Component{
//   render()
//   {
//     return(<h1>hi</h1>)
//   }

// }

