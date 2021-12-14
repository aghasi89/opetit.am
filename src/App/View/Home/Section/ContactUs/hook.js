import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { contactUsActions } from "../../../../store/actions";
import { contactUsSchema } from "../../../../utils";
import { contactUsSelectors } from "../../../../store/selectors";
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup";

export default () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactUsSchema),
        mode: "onSubmit"
    });
    const loading = useSelector(contactUsSelectors.contactUsLoadingSelector);
    const onSubmit = (data) => {
        console.log("asdasdasd");
        dispatch(contactUsActions.sendMassageAction(data))

    }
    return { register, handleSubmit, onSubmit, errors, loading }
}