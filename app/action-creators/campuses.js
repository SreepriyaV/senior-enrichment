import axios from "axios";

export const getCampuses=(campuses)=>{
    return {type: 'GETCAMPUSES', campuses}
}

export const addCampus=(campus)=>{
    return {type: 'ADDCAMPUS', campus}
}



//--------Thunk--------

export const dispatchGetCampuses=()=>{
    return function thunk(dispatch)
    {
        axios.get("api/campuses/")
        .then(res=>dispatch(getCampuses(res.data)));
    }
}

export const dispatchAddCampus=(campus)=>{
    return function thunk(dispatch)
    {
        axios.post("api/campuses/",campus)
        .then(res=>{
            console.log(res.data);
            dispatch(addCampus(res.data))});
    }
}






