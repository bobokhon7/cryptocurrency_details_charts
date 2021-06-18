import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Cards from '../Card'
import Footer from '../Footer'
import HeaderCoin from '../Header'
import TextTicker from '../TextTicker'
import TotalPrice from '../TotalPrice'
import alanBtn from "@alan-ai/alan-sdk-web";

import{Container,SpinnerLoading} from  "./style"
const alanKey = "a1e879e5210af325e788384d2bd2b70b2e956eca572e1d8b807a3e2338fdd0dc/stage";
const CardData = () => {
   const[coins,setCoins] = useState([])
   const[isLoading,setIsLoading] = useState(false)
   useEffect(() => {
      alanBtn({
        key: alanKey,
        onCommand: ({ command, articles }) => {
          if (command === "newHeadlines") {
            console.log(articles);
          }
        },
      });
    }, []);

   useEffect(() =>{
      const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      axios.get(URL).then(res => {
         const info = res.data
         setCoins(info)
         setIsLoading(true)
      }).catch((error) =>{
         console.log(error);
      })
   },[])
   // console.log(coins)
   return (
      <Container >
        
         {isLoading?( <> 
         <TextTicker/>
         <TotalPrice/>
         <HeaderCoin/>
         <Cards coins={coins}/> 
         <Footer/>
         </>):(<SpinnerLoading><img alt="loading" src='https://thumbs.gfycat.com/CriminalWhichEasteuropeanshepherd-size_restricted.gif'/></SpinnerLoading>)}
       
       
      
      </Container>
   )
}

export default CardData
