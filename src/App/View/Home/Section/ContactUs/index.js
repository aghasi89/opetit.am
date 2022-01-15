import LoaderComponent from 'react-fullpage-custom-loader';
import "./ContactUs.css"
import contactUsHook from "./hook";
import { ButtonComponent, TextComponent } from "../../../../components";
import Input from "../../../../components/Input/Input";
import { Col, Container, Row } from 'react-bootstrap';

export default function ContactUs() {
    const { errors, loading, register, handleSubmit, onSubmit } = contactUsHook();
    return (
        <>
            {loading && <LoaderComponent
                sentences
                loaderType="square-jelly-box"
                wrapperBackgroundColor="rgba(192,192,192,0.3)" />}
            <div className="contactUsGeneralConteiner">
                <div className='img'></div>
                <Container >
                    <Row>
                        <Col className='titlCol'>
                          <div className="contactUsImage">
                            <div className="contactUsImageTitleAndText">
                                <div className='contactUsTitleAndText'>
                                    <div className="contactUsTitle">
                                        <TextComponent
                                            type="h2"
                                            title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                                            color="white"
                                        />
                                    </div>
                                    <div className="contactUsText">
                                        <TextComponent
                                            type="span"
                                            title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                                            color="white"
                                        />
                                    </div>
                                </div>
                                <div className='empty'></div>
                            </div>
                        </div>
                        </Col>
                    <Col className='FormCol' >
                        <div className='contactUsFormGeneral'>
                            <div className="contactUsFormTitle ">
                                <TextComponent
                                    type="h2"
                                    title="CONTACT US"
                                />
                                <div className="titleLine"></div>
                            </div >
                            <div className="contactUsFormConteiner ">
                                <form className="contactUsForm d-flex justify-content-start flex-column"
                                    onSubmit={handleSubmit(onSubmit)}>
                                    {/* -----------------name input------------- */}
                                    <Input inputStyle="input-outlined-bottom"
                                        type="text"
                                        placeholder="Name"
                                        label="name"
                                        register={register}
                                    />
                                    <div className="errorMessageConteiner">{errors
                                        ?.name
                                        ?.message
                                        ? errors.name.message
                                        : null}</div>
                                    {/* -----------------Email input------------- */}
                                    <Input
                                        inputStyle="input-outlined-bottom"
                                        type="text"
                                        placeholder="Email"
                                        label="email"
                                        register={register}
                                    />
                                    <div className="errorMessageConteiner">{errors
                                        ?.email
                                        ?.message
                                        ? errors.email.message
                                        : null}</div>
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

                                    <div className="errorMessageConteiner">{errors
                                        ?.phone_number
                                        ?.message
                                        ? errors.phone_number.message
                                        : null}</div>
                                    {/* -----------------Text area----------------- */}
                                    <Input
                                        labelForTextarea="Massage"
                                        inputStyle="input-textarea"
                                        placeholder="write text here..."
                                        label="message"
                                        register={register} />
                                    <div className="errorMessageConteiner">{errors
                                        ?.message
                                        ?.message
                                        ? errors.message.message
                                        : null}</div>
                                    <div className="verificationConteiner " >verification</div>
                                    <div className="submitButtnConteiner">
                                        <ButtonComponent
                                            button_style="button"
                                            title="SUBMIT"
                                            color="primary"
                                            type="submit"
                                            onPress={() => { }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    {/* </div> */}
                </Container>
            </div>
        </>
    )
}