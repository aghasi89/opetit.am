import './About.css'
import { TextComponent } from "../../../../components"
export default () => {
    return (
        <div className='aboutUsGeneralConteiner'>
            <div className="titleAndTextConteiner container">
                <div className="aboutUsTitle">
                    <TextComponent type="h2" title="About us" />
                </div>
                <div className="aboutUsbody">
                    <TextComponent
                        type="span"
                        color="charcoal"
                        title=" Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Incidunt vero cum non excepturi nulla iste nam debitis a
                    nemo, error nobis itaque tenetur repudiandae blanditiis reprehenderit amet
                    ea voluptate recusandae?Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Incidunt vero cum non excepturi nulla iste nam debitis a
                    nemo, error nobis itaque tenetur repudiandae blanditiis reprehenderit amet
                    ea voluptate recusandae?Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Incidunt vero cum non excepturi nulla iste nam debitis a
                    nemo, error nobis itaque tenetur repudiandae blanditiis reprehenderit amet
                    ea voluptate recusandae?"
                    />
                </div>
            </div>
        </div>
    )
}