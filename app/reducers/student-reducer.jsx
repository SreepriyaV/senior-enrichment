

const GETSTUDENT= "GETSTUDENT"
const ADDSTUDENT= "ADDSTUDENT"
const UPDATESTUDENT= "UPDATESTUDENT"
const DELETESTUDENT= "DELETESTUDENT"



export default function reducer(student={}, action){
 
    switch(action.type)
    {
        
        case GETSTUDENT:
        return   action.student
        case ADDSTUDENT:
       // return {...state, students:[...state.students,action.student]}
        return action.student
        case UPDATESTUDENT:
        return  action.student;
        case DELETESTUDENT:
        return action.students ;
        default:
        return student;
    }

}