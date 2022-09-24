import * as types from "./actiontypes";

import axios from "axios";

const getResReq = () => {
  return {
    type: types.GET_HOTELS_REQ,
  };
};

const getResSuccess = (payload) => {
  return {
    type: types.GET_HOTELS_SUCCESS,
    payload,
  };
};

const getResFail = () => {
  return {
    type: types.GET_HOTELS_FAIL,
  };
};


// export const getData = (params) => {
//     return (dispatch) => {
//       dispatch(getResReq());
//       axios
//         .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants", params)
//         .then((res) => dispatch(getResSuccess(res.data)))
//         .catch((e) => dispatch(getResFail()));
//     };
//   };

const getData = (page) => {
    return(dispatch) => {
        dispatch(getResReq());
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20`).then((res) => dispatch(getResSuccess(res.data))).catch((e) => dispatch(getResFail()))

    }
}


  export {getData}