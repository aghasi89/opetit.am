import { useSelector } from "react-redux"
import { Redirect } from "react-router";
import { isAuthSelector } from "../../store/selectors"

export default ({children})=>{
    const isAuth = useSelector(isAuthSelector);
    const access = localStorage.getItem("access")
   
    return access?children:<Redirect to="/login"/>
}
