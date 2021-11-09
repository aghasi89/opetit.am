
import { Link } from "react-router-dom"
import NavigationMenu from "./NavigationMenu/NavigationMenu"

export default () => {
    return (
        <div className='header'>
            <div className='logoAndNavigationMenu'>
                <div className="logo"></div>
                <NavigationMenu />
            </div>
            <div className='registrationAndSignInButton'>
          <Link to='/login'><button>Log in</button></Link>
          <Link to='/registration'><button>Register</button></Link>
            </div>
        </div>)
}