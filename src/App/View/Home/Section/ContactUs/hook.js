import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { contactUsActions } from "../../../../store/actions";
import { contactUsSchema } from "../../../../utils";
import { contactUsSelectors } from "../../../../store/selectors";

export default () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactUsSchema),
        mode: "onSubmit"
    });
    const loading = useSelector(contactUsSelectors.contactUsLoadingSelector);
    const onSubmit = (data) => {
        dispatch(contactUsActions.sendMassageAction(data));
    }
    return { errors, loading, register, handleSubmit, onSubmit };
}