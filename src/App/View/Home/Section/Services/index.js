import "./Services.css"
import saladIcons from "./ServiceIcons/salad.png"
import servingdishIcons from "./ServiceIcons/servingdish.png"
import dessertIcons from "./ServiceIcons/dessert.png"
import cocktailIcons from "./ServiceIcons/cocktail.png"
export default ()=>{
    return(
        <div className="servicesContenier">
           <div className="servicesInfo">
               <div className="servicesTitle"><h1>Services</h1></div>
               <div className="servicesInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
           </div>
           <div className="servicesCardContenier">
               <div className="servicesCard">
                       <div className="servicesCardImage"><img src={saladIcons}/></div>
                       <div className="servicesCardTitle"><h3>Salad</h3></div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage"><img src={servingdishIcons}/></div>
                       <div className="servicesCardTitle"><h3>Hot Dish</h3></div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage"><img src={dessertIcons}/></div>
                       <div className="servicesCardTitle"><h3>Dessert</h3></div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage"><img src={cocktailIcons} /></div>
                       <div className="servicesCardTitle"><h3>Drinks</h3></div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
           </div>
        </div>
    )
}