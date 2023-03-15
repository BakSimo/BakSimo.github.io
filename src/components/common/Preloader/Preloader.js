import React from "react";
import preloader from "../../../Assets/img/Rolling-1s-151px.svg";
import c from "./Preloader.module.css"

let Preloader = () => {
    return ( 
        <div className={c.preloader}>
            <img src={preloader} alt="" />
        </div>
     );
}
 
export default Preloader;