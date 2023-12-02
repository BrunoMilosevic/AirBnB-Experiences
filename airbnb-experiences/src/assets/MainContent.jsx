import React from "react";
import star from "./star.png"
import swimmer from "./swimmer.png"
function MainContent(){
    return (
        <main>
            
            <div className="event-cards">
                <div className="card-1">
                    <img src={swimmer} alt="swimmer" className="event-host" />
                    <div className="card-description">
                        <img src={star} alt="Star rating" className="card--star" />
                        <span>5.0</span>
                        <span className="gray">(6) &#183; </span>
                        <span className="gray">USA</span>
                        
                    </div>
                    <p className="what-and-who">Life lessons with Katie Zaferes</p>
                        <p className="price"><span className="bold--paragraph">From $136</span>/ person</p>
                </div>
                <div className="card-2"></div>
                <div className="card-3"></div>
            </div>
            
        </main>
    )
}

export default MainContent