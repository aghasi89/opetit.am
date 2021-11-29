import "./Services.css"
import saladIcons from "../../../../../assets/img/salad.png"
import servingdishIcons from "../../../../../assets/img/servingdish.png"
import dessertIcons from "../../../../../assets/img/dessert.png"
import cocktailIcons from "../../../../../assets/img/cocktail.png"
import  Box  from "../../../../Components/Box"
import TextComponent from "../../../../Components/Text"
import ButtonComponent from "../../../../Components/Button"
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
                        <Box src={saladIcons} h3="Salad" span="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={servingdishIcons} h3="Hot Dish" span="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={dessertIcons} h3="Dessert" span="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
                    </div>
                    <div className="servicesCard">
                        <Box src={cocktailIcons} h3="Drinks" span="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore."/>
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
                    color="green"
                    />
                </div>
            </div>
        </div>
    )
}