import "./ContactUs.css"
import contactUsHook from "./hook"

export default function ContactUs() {
    const {register,handleSubmit, onSubmit, errors}=contactUsHook()


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
                    <input type="text"  placeholder="Name" {...register("name", {required:true, pattern: /^[A-Za-z]+$/i}) } />
                    {errors.name && errors.name.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    {errors.name&& errors.name.type==="pattern"&&<div style={{color:"red", fontSize:"10px"}}>name can execute only letters</div>}
                    <input type="email" placeholder="Email"{...register('email',{required:true})}/>
                    {errors.email&&errors.email.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    <input type="text" placeholder="Subject"{...register("subject")}/>
                    <input type="text" placeholder="Phone number" defaultValue="+374"{...register('phone_number', {required:true, pattern:/^[0-9,+]+$/i})}/>
                    {errors.phone_number && errors.phone_number.type==="required"&&<div style={{color:"red", fontSize:"10px"}}>this column is required</div>}
                    {errors.phone_number&& errors.phone_number.type==="pattern"&&<div style={{color:"red", fontSize:"10px"}}>name can execute only letters</div>}
                    <label  >Massage</label>
                    <textarea  placeholder="write text here..." {...register("message")}></textarea>
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}