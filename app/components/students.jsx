import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dispatchGetStudents } from '../action-creators/students';
import AddStudent from './AddStudent';

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
        {/* <ul className="list-inline large-font">
          <h1> Students </h1>
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
        </ul> */}

           <h1> Students </h1>
        <ul>
          { students.map(student => {
            return (
              <div className="row" key={student.id}>
                <li>
                  {student.name}
                  {/* <Link to={`/campuses/${campus.id}`}></Link> */}
                </li>
                {/* <Route path={`/campuses/${campus.id}`} render={() => (
                                    <SingleCampus singleCampus={campus.id}/>)} /> */}

                
              </div>
            );
          })}
        </ul>
       
        <div> <h2> Add Student </h2>
                  <AddStudent/>
                  </div>
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





