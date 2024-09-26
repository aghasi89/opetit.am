import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Firstname is required'),
    last_name: Yup.string()
        .required('Lastname is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirm_password: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    email: Yup.string()
        .email()
        .required('Email is required'),
    confirm_code: Yup.string()
        .length(6, "Must be 6 characters")
});
