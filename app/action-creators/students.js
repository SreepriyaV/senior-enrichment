import axios from "axios";

export const getStudents=(students)=>{
    return {type: 'GETSTUDENTS', students}
}

export const addStudent=(student)=>{
    return {type: 'ADDSTUDENT', student}
}


export const deleteStudent=(students)=>{
    return {type: 'DELETESTUDENT', students}
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

export const dispatchDeleteStudent=(studentId)=>{

return function thunk(dispatch)
    {
        axios.delete(`api/students/${studentId}`)
        .then(res=>dispatch(deleteStudent(res.data)));
    }
}