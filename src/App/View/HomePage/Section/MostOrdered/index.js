export default function MostOrdered() {
    return (
        <div className='mostOrderedGeneralConteiner d-flex flex-column' >
            <div className="mostOrderedTitleAndText d-flex flex-column justify-content-center align-items-center">
                <div className="mostOrderedTitle">Most ordered dishes</div>
                <div className="mostOrderedText"> Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</div>
            </div>
            <div className="mostOrderedSlides d-flex" ></div>
            <div className="mostOrderedButtons d-flex justify-content-end align-items-end">

                <button>{"<-- "}</button>
                <button>{"--> "}</button>
            </div>
        </div>
    )
}