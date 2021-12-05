import * as Yup from "yup";
import "yup-phone"
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



export const contactUsSchema = Yup.object().shape({
    name: Yup.string()
    .typeError("name can only contain letters")
    .required("Name is required"),
    email: Yup.string()
    .email("Pleas insert a valid email adress")
    .required("Email is required"),
    phone_number: Yup.string()
    .required("Phone number is required")
    .phone('AM',true,`Phone number is invalid`)
    .min(8,"Phone number must include min 8 number"),
    message:Yup.string()
    .required("please enter a message")
    .min(8,"message must include min 10 symbolse")
    
})