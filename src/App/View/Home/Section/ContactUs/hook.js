import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { contactUsActions } from "../../../../store/actions";
import 'react-toastify/dist/ReactToastify.css';
import { contactUsSelectors } from "../../../../store/selectors";


export default () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const loading=useSelector(contactUsSelectors.contactUsLoadingSelector)

    const onSubmit = (data) => {
        dispatch(contactUsActions.sendMassageAction(data))

    }
    return { register, handleSubmit, onSubmit, errors ,loading}
}