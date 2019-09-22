export const ChangeEmail = (newEmail) => {
    return{
        type: "CHANGE_EMAIL",
        payload: newEmail
    }
}

export const ChangePassword = (newPassword) => {
    return{
        type: "CHANGE_PASSWORD",
        payload: newPassword
    }
}

export const SetLoadingTrue = () => {
    return {
        type: "SET_LOADING_TRUE",
    }
}

export const SetLoadingFalse = () => {
    return {
        type: "SET_LOADING_False",
    }
}