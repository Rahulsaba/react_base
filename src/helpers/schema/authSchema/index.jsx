export const registerOptions = {
    email: {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
        }
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Enter at least 8 characters"
        }
    }
};