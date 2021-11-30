import { useSelector } from "react-redux"
import { Redirect } from "react-router";
import { isAuthSelector } from "../../store/selectors"

export default ({children})=>{
    const isAuth = useSelector(isAuthSelector);
    console.log(isAuth);
    return isAuth?children:<Redirect to="/login"/>
}
