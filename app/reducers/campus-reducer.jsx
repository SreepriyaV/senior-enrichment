

const GETCAMPUS= "GETCAMPUS"
const ADDCAMPUS= "ADDCAMPUS"
const UPDATECAMPUS= "UPDATECAMPUS"
const DELETECAMPUS= "DELETECAMPUS"


export default  function reducer(campus={}, action){
 
    switch(action.type)
    {
        
        case GETCAMPUS:
        return   action.campus;
        case ADDCAMPUS:
       // return {...state, campuses:[...state.campuses,action.campus]}
       return action.campus
        case UPDATECAMPUS:
        return   action.campus;
        case DELETECAMPUS:
        return action.campuses;
        default:
        return campus;
    }

}