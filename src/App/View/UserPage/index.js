import { useEffect } from "react";

export default ()=>{
    useEffect(() => {
        const access = localStorage.getItem("access");
        if (!access) {
          window.location = "/";
        }
      }, []);
    return (<div><h1>User's page</h1></div>)
}