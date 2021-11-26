import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getConfirmCodeAction, registerAction } from "../../store/actions"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import { confirmCodeSchema, dataSchema } from '../../utils/';

export default function RegisterHook() {
    const [regData, setRegdata]=useState(null);
    const formOptions = { mode: 'onBlur', resolver: yupResolver(dataSchema) }
    const formOptionsCode = { mode: 'onBlur', resolver: yupResolver(confirmCodeSchema) }

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const { register: registerCode, handleSubmit: handleSubmitCode, formState: { errors: errorsCode } } = useForm(formOptionsCode);

    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const onSubmitRegData = (data) => {
        //console.log(data, data.email);
        setRegdata(data)
        setLoading(true)
        console.log(data, data.confirm_code);
        if (data) {
            dispatch(getConfirmCodeAction({ ...data, setLoad: () => setLoading(false), setOpen: () => setIsOpen(true) }))
            console.log("dispatch ", data.email);
        }
    };

    const onSubmitRegCode = (data) => {
        setLoading(true)
        console.log(regData);
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
        handleSubmitCode,
        registerCode,
        errorsCode
    }
}