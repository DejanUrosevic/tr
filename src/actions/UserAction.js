import * as actionTypes from "./ActionTypes";

export const userLoggedIn = (user) => ({
    type: actionTypes.USER_LOG_IN_SUCCESS,
    user
});

export const userLoggedOut = () => ({
    type: actionTypes.USER_LOG_OUT_SUCCESS
});


export const login = credentials => dispatch => 
    userApi.user.login(credentials)
        .then(user => {
            localStorage.setItem("username", user.username);
            dispatch(userLoggedIn(user));
        });


export const logout = () => dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(userLoggedOut());
}