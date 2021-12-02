import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactUsActions } from "../../../../store/actions";

import 'react-toastify/dist/ReactToastify.css';

export default () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        dispatch(contactUsActions.sendMassageAction(data))

    }
    return { register, handleSubmit, onSubmit, errors }
}