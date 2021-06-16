import React from 'react'
import {  Link } from "react-router-dom";
import "./style.css"
// import{Container,CoinRow,CoinDetail,CoinImg,CoinTitle,CoinData} from  "./style"
const Cards = ({coins}) => {
  //  console.log(coins);
   return (
      <div className="mainContainer">
     
         {coins.map((value) => (
            <div key={value.id}  className="coin-container">
               <Link  key={value.id} style={{textDecoration:"none", color:"black"}} to={`/${value.id}`} >
      <div className="coin-row">
        <div className="coin">
          <img src={value.image} alt="crypto" />
          <h1>{value.name}</h1>
          <p className="coin-symbol">{value.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${value?.current_price}</p>
          <p className="coin-volume">${value.total_volume.toLocaleString()}</p>

          {value.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">{(value.price_change_percentage_24h ).toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{(value.price_change_percentage_24h).toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">Mkt Cap:${value.market_cap.toLocaleString()}</p>
        </div>
      </div>
      </Link>
    </div>  ))
    }
    </div>
  



     
   )
}

export default Cards
