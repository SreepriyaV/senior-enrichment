import axios from "axios";

export const getStudents=(students)=>{
    return {type: 'GETSTUDENTS', students}
}

export const addStudent=(student)=>{
    return {type: 'ADDSTUDENT', student}
}



//--------Thunk--------

export const dispatchGetStudents=()=>{
    return function thunk(dispatch)
    {
        axios.get("api/students/")
        .then(res=>dispatch(getStudents(res.data)));
    }
}

export const dispatchAddStudent=(student)=>{
    return function thunk(dispatch)
    {
        axios.post("api/students/",student)
        .then(res=>dispatch(addStudent(res.data)));
    }
}
