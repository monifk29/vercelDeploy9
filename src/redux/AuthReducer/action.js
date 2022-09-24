import * as types from "./actionTypes";
import axios from "axios"

const login = (payload) => {
    return(dispatch) => {
        dispatch({type: types.LOGIN_REQUEST});
        axios.post("https://reqres.in/api/login",payload).then((res) => dispatch({type: types.LOGIN_SUCCESS, payload: res.data})).catch((e) => dispatch({type: types.LOGIN_FAILURE}))
    }
}
export {login}