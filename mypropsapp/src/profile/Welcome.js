
import React from "react";

const Welcome= (props) => { 
    return(
         <button onClick={()=> props.alertMyInput(`My name is Heni`)}>
           ClickHere
         </button>
       
       
    );

}
export default Welcome;