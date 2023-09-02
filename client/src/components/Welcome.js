import React from "react";

function Welcome(){


return( 
    <div>
        <h1 id="welcome"> Welcome to JobLancer</h1>

      <div className="rightImage">
        <h1 style={{padding: "150px"}}>The way that we work <br/> is changing everyday</h1>
      </div>
      <div >
        <img className="leftImage" src="https://www.apa.org/images/hero-work-wellbeing-2022_tcm7-307273.jpg" alt="people working different jobs"></img>
      </div>

      <div className="leftImage">
        <h1 style={{padding: "150px"}}>Wherever you work</h1>
      </div>
      <div >
        <img className="rightImage" src="https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="woman using laptop"></img>
      </div>

      <div className="rightImage">
        <h1 style={{padding: "150px"}}>However you work</h1>
      </div>
      <div >
        <img className="leftImage" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="overhead view of people in meeting"></img>
      </div>


      <div className="leftImage">
        <h1 style={{padding: "100px"}}>Let us help you find the job <br/> that lets you work <br/> on your terms</h1>
      </div>
      <div >
        <img className="rightImage" src="https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="handshake"></img>
      </div>
    </div>)
}
export default Welcome