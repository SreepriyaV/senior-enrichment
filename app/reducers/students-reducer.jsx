const GETSTUDENTS= "GETSTUDENTS"

export default function reducer(students=[], action){
 
    switch(action.type)
    {
        case GETSTUDENTS:
        return action.students
    
        default:
        return students;
    }

}