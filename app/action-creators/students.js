import axios from "axios";

export const getStudents=(students)=>{
    return {type: 'GETSTUDENTS', students}
}


//--------Thunk--------

export const dispatchGetStudents=()=>{
    return function thunk(dispatch)
    {
        axios.get("api/students/")
        .then(res=>dispatch(getStudents(res.data)));
    }
}

