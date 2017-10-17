const GETCAMPUSES= "GETCAMPUSES";

export default  function reducer(campuses=[], action){
 
    switch(action.type)
    {
        case GETCAMPUSES:
        return action.campuses;
      
        default:
        return campuses;
    }

}