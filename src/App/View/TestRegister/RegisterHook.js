import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getConfirmCodeAction, registerAction } from "../../store/actions"
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from '../../utils/validationSchema';
import { useState } from 'react';
export default function RegisterHook() {
    const [regData, setRegdata]=useState(null);
    const formOptions = { resolver: yupResolver(validationSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"}, formOptions);
    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
      } = useForm({mode: "onBlur"}, formOptions);

    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const onSubmitRegData = (data) => {
        setRegdata(data)
        console.log(regData,"regData");
        console.log(data, data.confirm_code);
        setLoading(true)
        if (data) {
            dispatch(getConfirmCodeAction({ ...data, setLoad: () => setLoading(false), setOpen: () => setIsOpen(true) }))
            console.log("dispatch ", data.email);
        }
    };
    console.log(regData,"registData");
    const onSubmitRegCode = (data) => {
        console.log(regData,"regData");
        setLoading(true)
        if (data) {
            dispatch(registerAction({ ...data, ...regData, setLoad: () => setLoading(false) }))
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
        setIsOpen,
        register2,
        errors2,
        handleSubmit2
    }
}