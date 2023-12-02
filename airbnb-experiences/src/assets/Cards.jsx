import React from "react";
import cardGroup from "./group.png"

function Cards (){
    return (
        <section className="hero">
        
            <img src={cardGroup} className="cards"  alt="Cards group image"/>
        
        <div className="titles">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
    </section>
    )
}

export default Cards