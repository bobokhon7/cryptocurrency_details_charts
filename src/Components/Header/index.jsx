import React from 'react'
import "./style.css"

const HeaderCoin = () => {
   return (
     <div className="mainContainer">
      <div className="nameContainer">
      <div className="currencyName">
          <h5>Name</h5>
        </div>
        <div className="currencyPrice">
          <h5>Price</h5>
        </div>
        <div className="currencyValume">
          <h5>Volume</h5>
        </div>
       
        <div className="currencyPercent">
          {" "}
          <h5>24h%</h5>
        </div>
        <div className="currencyMarket">
          <h5>Market Cap</h5>
        </div>
      </div>
      </div> 
   )
}

export default HeaderCoin
