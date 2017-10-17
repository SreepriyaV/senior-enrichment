const GETCAMPUSES= "GETCAMPUSES";
const ADDCAMPUS= "ADDCAMPUS"

export default  function reducer(campuses=[], action){
 
    switch(action.type)
    {
        case GETCAMPUSES:
        return action.campuses;
        case ADDCAMPUS:
        return [...campuses,action.campus]

        default:
        return campuses;
    }

}