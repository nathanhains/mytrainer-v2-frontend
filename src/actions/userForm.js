export const updateUserForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetUserForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

export const setEditUserForm = user => {

    const userFormData = {
        name: user.data.attributes.name,
        username: user.data.attributes.username,
        email: user.data.attributes.email
    }

    return {
        type: "SET_EDIT_USER_FORM",
        userFormData
    }
}