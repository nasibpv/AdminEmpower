import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {loginReducer,staffData} from '../Reducer/reducers'
// reducer
const reducer=combineReducers({
    loginUser:loginReducer,
    staffs:staffData
})
// const reducers=combineReducers({
//     staffs:staffData
// })


// middleware
const middleware=[thunk]
// create store
const store =createStore(reducer,applyMiddleware(...middleware))

export default store