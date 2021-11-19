import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getConfirmCodeAction, registerAction } from "../../store/actions"

export default function RegisterHook () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false);

    const onSubmitRegData = (data) => {
        //console.log(data, data.email);
        console.log(data, data.confirm_code);
        if (data) {
           dispatch(getConfirmCodeAction({...data, setLoad:()=>setLoading(false)}))
            console.log("dispatch ", data.email);
        }
    };

    const onSubmitRegCode = (data) => {
        setLoading(true)
        if (data) {
            dispatch(registerAction({...data, setLoad:()=>setLoading(false)}))
            console.log("dispatch after confirm code", data);
        }
    };

    return {register, handleSubmit, errors, loading, setLoading, onSubmitRegData, onSubmitRegCode}
}