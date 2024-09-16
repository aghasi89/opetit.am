import * as React from 'react';
import { getConfirmCodeAction, registerAction } from '../../store/actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { isAuthSelector } from '../../store/selectors';
import { confirmCodeSchema, dataSchema } from '../../utils/';

export default function RegisterHook() {
    const [regData, setRegdata] = useState(null);
    const formOptions = { mode: 'onBlur', resolver: yupResolver(dataSchema) };
    const formOptionsCode = {
        mode: 'onBlur',
        resolver: yupResolver(confirmCodeSchema),
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);
    const {
        register: registerCode,
        handleSubmit: handleSubmitCode,
        formState: { errors: errorsCode },
    } = useForm(formOptionsCode);

    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const history = useHistory();
    const isAuth = useSelector(isAuthSelector);
    React.useEffect(() => {
        if (isAuth) {
            history.push('/panel');
        }
    }, [isAuth]);
    const onSubmitRegData = (data) => {
        setRegdata(data);
        setLoading(true);
        if (data) {
            dispatch(
                getConfirmCodeAction({
                    ...data,
                    setLoad: () => setLoading(false),
                    setOpen: () => setIsOpen(true),
                })
            );
        }
    };
    const onSubmitRegCode = (data) => {
        setLoading(true);
        if (data) {
            dispatch(
                registerAction({
                    ...data,
                    ...regData,
                    setLoad: () => setLoading(false),
                })
            );
        }
    };
    return {
        errorsCode,
        modalIsOpen,
        errors,
        loading,
        register,
        handleSubmit,
        setLoading,
        onSubmitRegData,
        onSubmitRegCode,
        setIsOpen,
        handleSubmitCode,
        registerCode,
    };
}
