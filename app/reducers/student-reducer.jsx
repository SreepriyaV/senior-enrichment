

const GETSTUDENT= "GETSTUDENT"

const UPDATESTUDENT= "UPDATESTUDENT"
const DELETESTUDENT= "DELETESTUDENT"



export default function reducer(student={}, action){
 
    switch(action.type)
    {
        
        case GETSTUDENT:
        return   action.student
       
        case UPDATESTUDENT:
        return  action.student;
        case DELETESTUDENT:
        return action.students ;
        default:
        return student;
    }

}