

const GETSTUDENT= "GETSTUDENT"

const UPDATESTUDENT= "UPDATESTUDENT"




export default function reducer(student={}, action){
 
    switch(action.type)
    {
        
        case GETSTUDENT:
        return   action.student
       
        case UPDATESTUDENT:
        return  action.student;
       
        default:
        return student;
    }

}