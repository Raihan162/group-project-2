import { DO_LOGIN, SET_LOGIN, SET_DATA } from "./constants";

export const doLoginAction = (formData, cb) => ({
    type: DO_LOGIN,
    formData,
    cb
});

export const setLogin = (login) => ({
    type: SET_LOGIN,
    login,
});

export const setData = (data) => ({
    type: SET_DATA,
    data
})