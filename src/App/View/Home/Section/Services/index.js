import "./Services.css"
import saladIcons from "../../../../../assets/img/salad.png"
import servingdishIcons from "../../../../../assets/img/servingdish.png"
import dessertIcons from "../../../../../assets/img/dessert.png"
import cocktailIcons from "../../../../../assets/img/cocktail.png"
import  Box  from "../../../../components/Box"
import TextComponent from "../../../../components/Text"
import ButtonComponent from "../../../../components/Button"
export default () => {
    return (
        <div className="servicesGeneralContenier d-flex align-items-center justify-content-center">
            <div className="servicesContenier">
                <div className="servicesInfo">
                    <div className="servicesTitle">
                       
                        <TextComponent
                        title="Services"
                        type="h1"
                        />
                        </div>
                    <div className="servicesInfoText">
                        <TextComponent
                        type="span"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."
                        />
                    </div>
                </div>
                <div className="servicesCardContenier">
                    <div className="servicesCard">
                        <Box src={saladIcons} title="Salad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={servingdishIcons} title="Hot Dish" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={dessertIcons} title="Dessert" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={cocktailIcons} title="Drinks" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    {/* <div className="servicesCard">
                        <div className="servicesCardImage"><img src={servingdishIcons} /></div>
                        <div className="servicesCardTitle"><h3>Hot Dish</h3></div>
                        <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
                    </div>
                    <div className="servicesCard">
                        <div className="servicesCardImage"><img src={dessertIcons} /></div>
                        <div className="servicesCardTitle"><h3>Dessert</h3></div>
                        <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
                    </div>
                    <div className="servicesCard">
                        <div className="servicesCardImage"><img src={cocktailIcons} /></div>
                        <div className="servicesCardTitle"><h3>Drinks</h3></div>
                        <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
                    </div> */}
                </div>
                <div className="servicesButtonDiv d-flex justify-content-end">
                    <ButtonComponent
                    button_style="button"
                    type="submit"
                    title="Menu"
                    onPress
                    color="primary"
                    />
                </div>
            </div>
        </div>
    )
}