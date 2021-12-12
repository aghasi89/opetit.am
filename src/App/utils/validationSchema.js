import * as Yup from "yup";

export const dataSchema = Yup.object().shape({
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
});


export const confirmCodeSchema = Yup.object().shape({
    
    confirm_code: Yup.string()
        .length(6, "Must be 6 characters")
});


export const loginSchema = Yup.object().shape({
    
    username: Yup.string()
         .required("this column is required")
        .min(5, "user name must include minimum 5 symbols")
        ,
    password:Yup.string()
    .required('this column is required')
});