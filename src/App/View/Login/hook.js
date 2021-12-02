import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/actions";
import { authSelector } from "../../store/selectors";

export default ()=>{
const dispatch=useDispatch()
const {register,handleSubmit,formState:{errors}}=useForm()
const isAuth=useSelector(authSelector.isAuthSelector)
const history = useHistory()
useEffect(()=>{
if(isAuth){
    history.push("/panel")
}
},[isAuth])
const onSubmit=(data)=>{
    console.log(data);
    dispatch(authActions.loginAction({...data,role_code:"CL"}))

}
const errorMassage=useSelector(authSelector.errorMessageSelector)

return{register,handleSubmit,onSubmit,errors,errorMassage}
}