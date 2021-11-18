import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactUsActions } from "../../../../store/actions";

export default  ()=>{
    const dispatch =useDispatch()
    const {register,handleSubmit,formState:{errors}} =useForm()
    const onSubmit=(data)=>{
        console.log(data);
        // dispatch(contactUsActions.sendMassageAction(data))
        
    }
    return {register,handleSubmit, onSubmit,errors}
}