import React from "react";
import Image from "./images/adtest.jpg"
function Ad(){
    return(
        <div className="section">
        <header>
            <h1>Ad</h1>
        </header>
        <main>
            <img src= {Image} alt="AD" style={{ width: '200px', height: 'auto'}}/>
        </main>
    </div>
    )
}

export default Ad