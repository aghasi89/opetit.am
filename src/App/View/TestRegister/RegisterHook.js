import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getConfirmCodeAction, registerAction } from "../../store/actions"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function RegisterHook() {
    const validationSchema = Yup.object().shape({
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
            .required('Email is required')

    });
    const formOptions = { resolver: yupResolver(validationSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const onSubmitRegData = (data) => {
        //console.log(data, data.email);
        console.log(data, data.confirm_code);
        if (data) {
            dispatch(getConfirmCodeAction({ ...data, setOpen: () => setIsOpen(true) }))
            console.log("dispatch ", data.email);
        }
    };

    const onSubmitRegCode = (data) => {
        setLoading(true)
        if (data) {
            dispatch(registerAction({ ...data, setLoad: () => setLoading(false) }))
            console.log("dispatch after confirm code", data);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        loading,
        setLoading,
        onSubmitRegData,
        onSubmitRegCode,
        modalIsOpen,
        setIsOpen
    }
}