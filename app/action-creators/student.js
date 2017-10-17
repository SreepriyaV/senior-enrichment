import axios from "axios";

export const getStudent=(student)=>{
    return {type: 'GETSTUDENT', student}
}

export const addStudent=(student)=>{
    return {type: 'ADDSTUDENT', student}
}

export const updateStudent=(student)=>{
    return {type: 'UPDATESTUDENT', student}
}

export const deleteStudent=(students)=>{
    return {type: 'DELETESTUDENT', students}
}


export const dispatchGetStudent=(studentId)=>{
    return function thunk(dispatch)
    {
        axios.get(`api/students/${studentId}`)
        .then(res=>dispatch(getStudent(res.data)));
    }
}



export const dispatchAddStudent=(student)=>{
    return function thunk(dispatch)
    {
        axios.post("api/students/",student)
        .then(res=>dispatch(addStudent(res.data)));
    }
}

export const dispatchUpdateStudent=(studentId,student)=>{
    return function thunk(dispatch)
    {
        axios.put(`api/students/${studentId}`,student)
        .then(res=>dispatch(updateStudent(res.data)));
    }
}

export const dispatchDeleteStudent=(studentId)=>{

return function thunk(dispatch)
    {
        axios.delete(`api/students/${studentId}`)
        .then(res=>dispatch(deleteStudent(res.data)));
    }
}