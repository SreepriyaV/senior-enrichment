const GETSTUDENTS= "GETSTUDENTS";
const ADDSTUDENT= "ADDSTUDENT";
const DELETESTUDENT= "DELETESTUDENT"

export default function reducer(students=[], action){
 
    switch(action.type)
    {
        case GETSTUDENTS:
        return action.students

         case ADDSTUDENT:
       return  [...students,action.student]

        case DELETESTUDENT:
        return action.students ;
        
    
        default:
        return students;
    }

}