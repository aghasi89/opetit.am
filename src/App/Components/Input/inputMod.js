import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./style.css"

// dispatch(contactUsActions.sendMassageAction(data))


const InputMod = (props) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    const { labelsArr, inputStyle, patternArr } = props;
    var pattern=''
    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input {...props} className='input-outlined' />
                </div>
            )
        case 'input-outlined-bottom':
            console.log(props);
            return (
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {errors?.name?.type === "required" && <div style={{ color: "red", fontSize: "10px" }}>this column is required</div>}
                    {errors?.name?.type === "pattern" && <div style={{ color: "red", fontSize: "10px" }}>name can execute only letters</div>}
                    {errors?.email?.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    {errors?.phone_number?.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    {errors?.phone_number?.type==="pattern"&&<div style={{color:"red", fontSize:"10px"}}>name can execute only letters</div>}
                  
                  {labelsArr.map((label, index) => {
                        
                        switch (label) {
                            
                            case "name":
                                pattern={requird:true, pattern:/[A-Za-z]+$/i}
                                console.log("---------->",pattern);
                            break
                            default:
                                pattern=''
                                break;
                        }
                        
                        return (
                            <div key={index}>
                                <input {...props} className='input-outlined-bottom'  {...register(label, pattern)} />
                            </div>
                        )
                    })}
                    <input type="submit" />
                </form>
            )
        default:
            return null;
    }

}

export default InputMod