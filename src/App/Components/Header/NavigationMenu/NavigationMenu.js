import { Link } from "react-router-dom"

export default ()=>{
    return <div className='navigationMenu'>
        <Link to='/about'>About us</Link>
        <Link to= '/boxes'>Boxes</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contactus'>Contact us</Link>
    </div>
}