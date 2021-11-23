import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/actions";
import { authSelector } from "../../store/selectors";

export default ()=>{
    const dispatch=useDispatch()
const {register,handleSubmit,formState:{errors}}=useForm()
const onSubmit=(data)=>{
    dispatch(authActions.loginAction({...data,role_code:"CL"}))
}
const errorMassage=useSelector(authSelector.errorMessageSelector)
console.log(errorMassage);
return{register,handleSubmit,onSubmit,errors,errorMassage}
}