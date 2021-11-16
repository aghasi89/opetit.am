import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/actions";

export default ()=>{
    const dispatch=useDispatch()
const {register,handleSubmit,formState:{errors}}=useForm()
const onSubmit=(data)=>{
    dispatch(authActions.loginAction({...data,role_code:"CL"}))
}
return{register,handleSubmit,onSubmit,errors}
}