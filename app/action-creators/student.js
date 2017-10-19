import axios from "axios";

export const getStudent=(student)=>{
    return {type: 'GETSTUDENT', student}
}


export const updateStudent=(student)=>{
    return {type: 'UPDATESTUDENT', student}
}




export const dispatchGetStudent=(studentId)=>{
    return function thunk(dispatch)
    {
        axios.get(`/api/students/${studentId}`)
        .then(res=>dispatch(getStudent(res.data)));
    }
}





export const dispatchUpdateStudent=(studentId,student)=>{
    return function thunk(dispatch)
    {
        axios.put(`/api/students/${studentId}`,student)
        .then(res=>dispatch(updateStudent(res.data)));
    }
}

