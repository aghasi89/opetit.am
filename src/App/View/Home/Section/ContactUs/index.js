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
                            required
                            pattern={{ pattern: /^[A-Za-zА-Яа-я]+$/i }}
                            register={register}
                        />
                        {errors.name && errors.name.type === "required" && <div className="errorMessageConteiner">name is required</div>}
                        {errors.name && errors.name.type === "pattern" && <div className="errorMessageConteiner">name can only contain letters</div>}

                        {/* -----------------Email input------------- */}
                        <Input
                            inputStyle="input-outlined-bottom"
                            type="text"
                            placeholder="Email"
                            label="email"
                            required
                            register={register}
                            pattern={{ pattern: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i }}
                        />
                        {errors.email && errors.email.type === "required" && <div className="errorMessageConteiner">Email is required</div>}
                        {errors.email && errors.email.type === "pattern" && <div className="errorMessageConteiner">pleas insert a valid email adress</div>}

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
                            pattern={{ pattern: /^\+?([0-9]{2,3})\)?([-. ]{1})?([0-9]{2,3})?([-. ]{1})?([0-9]{2,3})?([-. ]{1})?([0-9]{2,3})?([-. ]{1})?([0-9]{2,3})$/, minLength: 8 }}
                            required
                            register={register} />

                        {errors.phone_number && errors.phone_number.type === "required" && <div className="errorMessageConteiner">Phone number is required</div>}
                        {errors.phone_number && errors.phone_number.type === "pattern" && <div className="errorMessageConteiner">Phone number can only contain numbers </div>}
                        {errors.phone_number && errors.phone_number.type === "minLength" && <div className="errorMessageConteiner">Phone number must include min 8 symbolse </div>}

                        {/* -----------------Text area----------------- */}
                        <div className="massageTitle">
                            <TextComponent 
                            type="span"
                            color="charcoal"
                            title="Massage"
                            />
                            
                            </div>
                        <textarea
                            className="massageTextarea"
                            placeholder="write text here..."
                            {...register("message", { required: true, minLength: 10 })}>
                        </textarea>
                        {errors.message && errors.message.type === "required" && <div className="errorMessageConteiner"> please enter a message</div>}
                        {errors.message && errors.message.type === "minLength" && <div className="errorMessageConteiner"> message must include min 10 symbolse</div>}
                        <div className="verificationConteiner ">verification</div>
                        <div className="submitButtnConteiner">
                            <ButtonComponent
                                button_style="button"
                                title="submit"
                                color="green"
                                type="submit"
                                onPress
                                add_class="fontSize"
                            />
                        </div>
                    </form>
                    

                </div>
            </div>
        </div>
    )
}