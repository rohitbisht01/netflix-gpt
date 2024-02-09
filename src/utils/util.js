export const signInValidation = (email, password) => {
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)

    if (!emailValidation) {
        return "Email Id is not valid"
    }

    if (!passwordValidation) {
        return "Password is not valid"
    }

    return null
}

// Validation function for sign-up
export const signUpValidation = (name, email, password) => {
    const nameValidation = name === "" ? false : true
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)

    if (!nameValidation) {
        return "Name is required"
    }

    if (!emailValidation) {
        return "Email Id is not valid"
    }

    if (!passwordValidation) {
        return "Password is not valid"
    }

    return null;
}

/*
Password Validation
Min 1 uppercase letter.
Min 1 lowercase letter.
Min 1 special character.
Min 1 number.
Min 8 characters.
Max 30 characters.
*/