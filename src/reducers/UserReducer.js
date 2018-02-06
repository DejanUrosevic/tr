import * as actionType from "../actions/ActionTypes";
import initialState from "./initialState";

export default function UserReducer(state = initialState, action){
    switch(action.type){
        case actionType.USER_LOG_IN_SUCCESS:
            return action.user;
        case actionType.USER_LOG_OUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}