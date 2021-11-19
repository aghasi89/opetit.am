import { ToastContainer } from "react-toastify";
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
                <div className="contactUsFormTitle">
                    <h1>CONTACT US</h1>
                </div >
                <div className="contactUsFormConteiner d-flex justify-content-start flex-column">
                    <form className="d-flex justify-content-start flex-column" onSubmit={handleSubmit(onSubmit)}>

                        {/* -----------------name input------------- */}
                        <Input inputStyle="input-outlined-bottom"
                            type="text"
                            placeholder="Name"
                            label="name"
                            required
                            pattern={{ pattern: /^[A-Za-zА-Яа-я]+$/i }}
                            register={register}
                        />
                        {errors.name && errors.name.type === "required" && <div style={{ color: "red", fontSize: "10px" }}>name is required</div>}
                        {errors.name && errors.name.type === "pattern" && <div style={{ color: "red", fontSize: "10px" }}>name can only contain letters</div>}



                        {/* -----------------Email input------------- */}
                        <Input
                            inputStyle="input-outlined-bottom"
                            type="email"
                            placeholder="Email"
                            label="email"
                            required
                            register={register}
                        />
                        {errors.email && errors.email.type === "required" && <div style={{ color: "red", fontSize: "10px" }}>Email is required</div>}

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
                            defaultValue="+374"
                            label="phone_number"
                            pattern={{ pattern: /^[0-9,+]+$/i }}
                            required
                            register={register} />

                        {errors.phone_number && errors.phone_number.type === "required" && <div style={{ color: "red", fontSize: "10px" }}>Phone number is required</div>}
                        {errors.phone_number && errors.phone_number.type === "pattern" && <div style={{ color: "red", fontSize: "10px" }}>Phone number can only contain numbers </div>}

                        {/* -----------------Text area----------------- */}
                        <div className="massageTitle">Massage</div>
                        <textarea
                            className="massageTextarea"
                            placeholder="write text here..."
                            {...register("message")}>
                        </textarea>
                        <div className="verificationConteiner ">verification</div>

                        <button type="submit" > submit </button  >
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <ToastContainer />

                </div>
            </div>
        </div>
    )
}