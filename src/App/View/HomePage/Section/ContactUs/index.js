import "./ContactUs.css"


export default function ContactUs() {
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
                <div className="contactUsFormInputs">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <textarea name='massage' defaultValue="write text here..."></textarea>
                    <input type="submit" />
                </div>
            </div>
        </div>
    )
}