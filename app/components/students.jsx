import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dispatchGetStudents } from '../action-creators/students';

/* -----------------    COMPONENT     ------------------ */

 class students extends Component {
  constructor(props) {
    super(props);

  
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount () {
    this.props.fetchInitialData();

  }

onHandleChange(event){

  console.log(event.target.value);


}


onSubmit(event){
  event.preventDefault();
}

    
  

  render() {
   
    const {students} = this.props;
  
   
    
    return (
      <div className="container story-container">
        <ul className="list-inline large-font">
          
          <li>
            <select
             onSubmit={this.onSubmit}
              onChange={this.onHandleChange}>
            {
              students.map(student => (
                <option key={student.id} value={student.name}>{student.name}</option>
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
  return {students: state.students}
};

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
  
    dispatch(dispatchGetStudents());
  
  }
});


 export default connect(mapProps, mapDispatch)(students);





