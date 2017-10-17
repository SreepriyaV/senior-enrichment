import axios from "axios";

export const getCampuses=(campuses)=>{
    return {type: 'GETCAMPUSES', campuses}
}




//--------Thunk--------

export const dispatchGetCampuses=()=>{
    return function thunk(dispatch)
    {
        axios.get("api/campuses/")
        .then(res=>dispatch(getCampuses(res.data)));
    }
}







