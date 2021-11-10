import "./Services.css"
export default ()=>{
    return(
        <div className="servicesContenier">
           <div className="servicesInfo">
               <div className="servicesTitle">Services</div>
               <div className="servicesInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
           </div>
           <div className="servicesCardContenier">
               <div className="servicesCard">
                       <div className="servicesCardImage">image</div>
                       <div className="servicesCardTitle">Salad</div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage">image</div>
                       <div className="servicesCardTitle">Hot Dish</div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage">Image</div>
                       <div className="servicesCardTitle">Dessert</div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
               <div className="servicesCard">
                       <div className="servicesCardImage">Image</div>
                       <div className="servicesCardTitle">Drinks</div>
                       <div className="servicesCardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</div>
               </div>
           </div>
        </div>
    )
}