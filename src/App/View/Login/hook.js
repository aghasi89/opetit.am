import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/actions";
import { authSelector } from "../../store/selectors";
import { loginSchema } from "../../utils/validationSchema";
export default ()=>{
const dispatch=useDispatch()
const {register,handleSubmit,formState:{errors}}=useForm({
    mode:"onSubmit",
    resolver:yupResolver(loginSchema)
})
const isAuth=localStorage.getItem('access')
const loading=useSelector(authSelector.loadigSelector)
const history = useHistory()
const errorMassage=useSelector(authSelector.errorMessageSelector)

useEffect(() => {
    if (isAuth) {
        history.push('/panel')
    }
}, [isAuth])

const onSubmit=(data)=>{
    console.log(data);
    dispatch(authActions.loginAction({...data,role_code:"CL"}))

}


return{register,handleSubmit,onSubmit,errors,errorMassage,loading}
}