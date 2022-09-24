import * as types from './actiontypes'

const initialState = {
res : [],
isLoading: false,
isError: false,
}

export const reducer = (state = initialState,action) => {
const {type,payload} = action

switch(type) {
case types.GET_HOTELS_REQ : {
return {
...state,
isLoading : true,
isError : false
}
}
case types.GET_HOTELS_SUCCESS : {
return {
...state,
res : payload,
isLoading : false,
isError : false
}
}
case types.GET_HOTELS_FAIL : {
return {
...state,
isLoading : false,
isError : true
}
}
default :
return state
}
};

