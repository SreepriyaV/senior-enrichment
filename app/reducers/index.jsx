import { combineReducers } from "redux";

import campus from "./campus-reducer";
import student from "./student-reducer";
import campuses from "./campuses-reducer";
import students from "./students-reducer";

export default combineReducers({ campus, student, campuses, students });
