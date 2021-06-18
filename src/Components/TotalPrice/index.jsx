import React from 'react'
import "./price.css"

const TotalPrice = () => {
   return (
      <div className="price">
         <div className="priceWrapper">

         <h6>Coins: <span style={{color:"#86b1f7"}}>8017</span></h6>
         <h6>Exchanges: <span style={{color:"#86b1f7"}}>476</span></h6>
         <h6>Total Market Cap: <span style={{color:"#86b1f7"}}>$1,612,974,311,902</span></h6>
         <h6>24h Volume: <span style={{color:"#86b1f7"}}>$110,864,743,596</span></h6>
         <h6>Dominance: <span style={{color:"#86b1f7"}}>
BTC 44.0%
ETH 16.6%
</span></h6>
         <h6>ETH Gas: <span style={{color:"#86b1f7"}}> 17 gwei</span></h6>
         </div>
         
      </div>
   )
}

export default TotalPrice
