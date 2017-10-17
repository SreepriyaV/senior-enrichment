import { combineReducers } from 'redux'

import campus from './campus-reducer'
import student from './student-reducer'
import campuses from './campuses-reducer'
import students from './students-reducer'


export default combineReducers({campus, student, campuses, students});


// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer