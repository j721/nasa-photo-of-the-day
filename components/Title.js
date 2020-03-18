import React from "react";

const AppTitle =(props)=>{
    return(
        <h1>{props.title}</h1>
        <p>{props.info}</p>
    )
}

export default AppTitle;