import { ToastContainer } from "react-toastify";
import { ButtonComponent, TextComponent } from "../../../../components";
import Input from "../../../../components/Input/Input"
import "./ContactUs.css"
import contactUsHook from "./hook"

export default function ContactUs() {
    const { register, handleSubmit, onSubmit, errors } = contactUsHook();

    return (
        <div className="contactUsGeneralConteiner">
            <div className="contactUsImage">
                <div className="contactUsImageTitleAndText">
                    <div className='contactUsTitleAndText'>
                        <div className="contactUsTitle">
                            <TextComponent
                                type="h2"
                                title="Lorem ipsum dolor sit,amet consectetur
                            adipisicing elit. Incidunt"
                            />

                        </div>
                        <div className="contactUsText">
                            <TextComponent
                                type="span"
                                title="Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a"
                            />

                        </div>
                    </div>
                    <div className='empty'></div>
                </div>
            </div>
            <div className='contactUsFormGeneral'>
                <div className="contactUsFormTitle ">
                    <TextComponent
                        type="h2"

                        title="CONTACT US"
                    />
                    <div className="titleLine"></div>
                </div >
                <div className="contactUsFormConteiner ">
                    <form className="contactUsForm d-flex justify-content-start flex-column" onSubmit={handleSubmit(onSubmit)}>

                        {/* -----------------name input------------- */}
                        <Input inputStyle="input-outlined-bottom"
                            type="text"
                            placeholder="Name"
                            label="name"
                            register={register}
                        />
                        {errors.name?.message && <div className="errorMessageConteiner">{errors.name.message}</div>}

                        {/* -----------------Email input------------- */}
                        <Input
                            inputStyle="input-outlined-bottom"
                            type="text"
                            placeholder="Email"
                            label="email"
                            register={register}
                        />
                        {errors.email?.message && <div className="errorMessageConteiner">{errors.email.message}</div>}
                        

                        {/* -----------------Subject input----------------- */}
                        <Input
                            inputStyle="input-outlined-bottom"
                            type="text"
                            placeholder="Subject"
                            label="subject"
                            register={register} />

                        {/* -----------------Phone number input----------------- */}
                        <Input
                            inputStyle="input-outlined-bottom"
                            type="text" placeholder="Phone number"
                            label="phone_number"
                            register={register} />

                        {errors.phone_number?.message && <div className="errorMessageConteiner">{errors.phone_number.message}</div>}
                      

                        {/* -----------------Text area----------------- */}

                        <Input
                            labelForTextarea="Massage"
                            inputStyle="input-textarea"
                            placeholder="write text here..."
                            label="message"
                            register={register} />
                            
                        {errors.message?.message && <div className="errorMessageConteiner">{errors.message.message}</div>}
                        

                        <div className="verificationConteiner " >verification</div>
                        <div className="submitButtnConteiner">
                            <ButtonComponent
                                button_style="button"
                                title="submit"
                                color="primary"
                                type="submit"
                                onPress={()=>{}}
                                add_class="fontSize"
                            />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}