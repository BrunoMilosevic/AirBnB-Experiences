import React from "react";
import star from "./star.png"


function MainContent(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    } 
    return (
        
            
                <div className="event-cards">
                   {badgeText && <div className="soldout">
                        {badgeText}
                    </div>}
                    <img src={`./src/assets/${props.coverImg}`} alt="" className="event-host" />
                    <div className="card-description">
                        <img src={star} alt="Star rating" className="card--star" />
                        <span>{props.stats.rating}</span>
                        <span className="gray">({props.stats.reviewCount}) &#183; </span>
                        <span className="gray">{props.location}</span>
                        
                    </div>
                    <p className="what-and-who">{props.title}</p>
                        <p className="price"><span className="bold--paragraph">From {props.price}</span>/ person</p>
                </div>
            
            
        
    )
}

export default MainContent