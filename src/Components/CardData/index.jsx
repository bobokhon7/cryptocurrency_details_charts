import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Cards from '../Card'
import{Container,SpinnerLoading} from  "./style"
const CardData = () => {
   const[coins,setCoins] = useState([])
   const[isLoading,setIsLoading] = useState(false)

   useEffect(() =>{
      const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
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
         {isLoading?(  <Cards  coins={coins}/>):(<SpinnerLoading><img alt="loading" src='https://thumbs.gfycat.com/CriminalWhichEasteuropeanshepherd-size_restricted.gif'/></SpinnerLoading>)}
       
        
      
      </Container>
   )
}

export default CardData
