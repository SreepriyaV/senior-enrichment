import axios from "axios";

export const getCampus=(campus)=>{
    return {type: 'GETCAMPUS', campus}
}


export const updateCampus=(campus)=>{
    return {type: 'UPDATECAMPUS', campus}
}


export const dispatchGetCampus=(campusId)=>{
    return function thunk(dispatch)
    {
        axios.get(`/api/campuses/${campusId}`)
        .then(res=>{
            
            dispatch(getCampus(res.data))
        }
    );
    }
}



export const dispatchUpdateCampus=(campusId,campus)=>{
    return function thunk(dispatch)
    {
        axios.put(`/api/campuses/${campusId}`,campus)
        .then(res=>dispatch(updateCampus(res.data)));
    }
}
