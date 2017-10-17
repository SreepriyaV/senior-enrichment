import axios from "axios";

export const getCampus=(campus)=>{
    return {type: 'GETCAMPUS', campus}
}


export const addCampus=(campus)=>{
    return {type: 'ADDCAMPUS', campus}
}

export const updateCampus=(campus)=>{
    return {type: 'UPDATECAMPUS', campus}
}

export const deleteCampus=(campuses)=>{
    return {type: 'DELETECAMPUS', campuses}
}

export const dispatchGetCampus=(campusId)=>{
    return function thunk(dispatch)
    {
        axios.get(`api/campuses/${campusId}`)
        .then(res=>{
            console.log("res",res.data);
            dispatch(getCampus(res.data))
        }
    );
    }
}

export const dispatchAddCampus=(campus)=>{
    return function thunk(dispatch)
    {
        axios.post("api/campuses/",campus)
        .then(res=>dispatch(addCampus(res.data)));
    }
}

export const dispatchUpdateCampus=(campusId,campus)=>{
    return function thunk(dispatch)
    {
        axios.put(`api/campuses/${campusId}`,campus)
        .then(res=>dispatch(updateCampus(res.data)));
    }
}

export const dispatchDeleteCampus=(campusId)=>{

return function thunk(dispatch)
    {
        axios.delete(`api/campuses/${campusId}`)
        .then(res=>dispatch(deleteCampus(res.data)));
    }
}