import {SUCCESS,FAIL} from "../Constants/restConstants"


export const loginReducer=(state={loginUser:[]},action)=>{
        switch(action.type){
            case SUCCESS:
                return {
                    loginUser:action.payload.user
                }
            case FAIL :
                return {
                    loginUser:action.payload
                }
            default:
                    return state
        }
}
export const staffData=(state={staffs:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                staffs:action.payload.staff
            }
        case FAIL :
            return {
                staffs:action.payload
            }
        default:
                return state
    }
}


export const studentData=(state={student:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                student:action.payload.student
            }
            case FAIL :
                return{
                    student:action.payload
                }
            default:
                return state
    }
}