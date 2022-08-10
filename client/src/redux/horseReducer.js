import socket from "../socket";

const SET_HORSES = "SET_HORSES"

let initialState = {
    horses: [],
}

const horseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HORSES: {
            return {...state, horses: action.payload}
        }
        default:
            return state
    }
}

export const getHorses = () => {
    return async (dispatch) => {
        await socket.on('ticker', function (res) {
            dispatch({type: SET_HORSES, payload:res})
        })
    }
}

export default horseReducer