

const GETCAMPUS= "GETCAMPUS"

const UPDATECAMPUS= "UPDATECAMPUS"
const DELETECAMPUS= "DELETECAMPUS"


export default  function reducer(campus={}, action){
 
    switch(action.type)
    {
        
        case GETCAMPUS:
        return   action.campus;
        
        case UPDATECAMPUS:
        return   action.campus;
        case DELETECAMPUS:
        return action.campuses;
        default:
        return campus;
    }

}