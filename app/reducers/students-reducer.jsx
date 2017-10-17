const GETSTUDENTS= "GETSTUDENTS";
const ADDSTUDENT= "ADDSTUDENT";

export default function reducer(students=[], action){
 
    switch(action.type)
    {
        case GETSTUDENTS:
        return action.students

         case ADDSTUDENT:
       return  [...students,action.student]
        
    
        default:
        return students;
    }

}