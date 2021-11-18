import Input from "../../../../components/Input/Input"
import InputMod from "../../../../components/Input/inputMod";
import "./ContactUs.css"
import contactUsHook from "./hook"

export default function ContactUs() {
    const {register,handleSubmit, onSubmit, errors}=contactUsHook();

    return (
        <div className="contactUsGeneralConteiner">
            <div className="contactUsImage">
                <div className="contactUsImageTitleAndText">
                    <div className='contactUsTitleAndText'>
                        <div className="contactUsTitle">
                            <h2>Lorem ipsum dolor sit,amet consectetur
                            adipisicing elit. Incidunt</h2>
                        </div>
                        <div className="contactUsText">
                        <span>
                            Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a
                            </span>
                        </div>
                    </div>
                    <div className='empty'></div>
                </div>
            </div>
            <div className='contactUsFormGeneral'>
                <div className="contactUsFormTitle">
                    <h1>CONTACT US</h1>
                </div >
                <div className="contactUsFormConteiner d-flex justify-content-start flex-column">
                    <form className="d-flex justify-content-start flex-column" onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* -----------------name input------------- */}
                    <Input inputstyle="input-outlined-bottom"
                     type="text"  
                     placeholder="Name" 
                     label="name" 
                     req={{required:true}}
                     pattern={{pattern:/[A-Za-z]+$/i}} 
                     register={register}
                     />                    
                    {errors?.name?.type==="register" && "name is required"}
                    {errors?.name?.type==="pattern" && "123456789"}
                    


                    {/* -----------------Email input------------- */}
                    <Input 
                    inputStyle="input-outlined-bottom" 
                    type="email" 
                    placeholder="Email" 
                    label="email" 
                    pattern={{required:true}} 
                    register={register}
                    />
                    {errors.email&&errors.email.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}

                    {/* -----------------Subject input----------------- */}
                    <Input 
                    inputStyle="input-outlined-bottom"
                    type="text" 
                    placeholder="Subject"
                    label="subject" 
                    register={register}/>

                    {/* -----------------Phone number input----------------- */}
                    <Input 
                    inputStyle="input-outlined-bottom" 
                    type="text" placeholder="Phone number" 
                    defaultValue="+374" label="phone_number"  
                    pattern= {{required:true ,
                     pattern:/^[0-9,+]+$/i}} 
                    register={register}/>

                    {errors.phone_number && errors.phone_number.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    {errors.phone_number&& errors.phone_number.type==="pattern"&&<div style={{color:"red", fontSize:"10px"}}>name can execute only letters</div>}
                   
                    {/* -----------------Text area----------------- */}
                    <label>Massage</label>
                    <textarea  placeholder="write text here..." {...register("message")}></textarea>
                   <button> submit</button  >
                    </form>
                    
                    <InputMod inputStyle="input-outlined-bottom" labelsArr={["name","email","subject","phone_number"] }/>
                </div>
            </div>
        </div>
    )
}