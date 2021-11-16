import { useForm } from "react-hook-form";

export default  ()=>{
    const {register,handleSubmit,formState:{errors}} =useForm()
    const onSubmit=(data)=>{
        console.log(data);
    }
    return {register,handleSubmit, onSubmit,errors}
}