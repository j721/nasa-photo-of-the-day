import React from "react";

const AppTitle =(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <p>{props.info}</p>
        </div>
    )
}

export default AppTitle;