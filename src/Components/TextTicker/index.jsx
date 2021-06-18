import React from 'react'
import "./style.css"


const TextTicker = () => {
  
   return (
      <div className="tcontainer">
         
       <div className="ticker-wrap">
        <div className="ticker-move">
            <div className="ticker-item">
            The global cryptocurrency market cap is $1.57 trillion.
            </div>
            <div className="ticker-item">
            Cryptocurrency exchange Coinbase has filed to go public via direct listing.
            </div>
            <div className="ticker-item">
            Tesla is the first S&P 500 company to invest in Bitcoin and joins a growing list of corporates leveraging the cryptocurrency's volatility for returns.
            </div>
       </div>
      </div>
    </div>
   )
}

export default TextTicker
