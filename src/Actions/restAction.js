import axios from "axios";
import { SUCCESS, FAIL } from "../Constants/restConstants";

export const users = () => async (dispatch) => {
    
    try {
            // url in axios    
        const { data } = await axios.get('/datas.json')
        console.log(data);
        dispatch(
            {
            payload:data.users,
            type:SUCCESS
            }
        )
    }
    catch (eror) {
       dispatch({
        payload:eror,
        type:FAIL
       })
    }
}


export const staff = () => async (dispatch) => {
//     const { data } = await axios.get('/datas.json')
// console.log(data);
    try {
            // url in axios    
        const { data } = await axios.get('/datas.json')
        // console.log(data);
        dispatch(
            {
            payload:data,
            type:SUCCESS
            }
        )
    }
    catch (eror) {
       dispatch({
        payload:eror,
        type:FAIL
       })
    }
}