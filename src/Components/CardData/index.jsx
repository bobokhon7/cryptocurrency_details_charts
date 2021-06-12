import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Cards from '../Card'
import{Container} from  "./style"
import {  Link } from "react-router-dom";

const CardData = () => {
   const[coins,setCoins] = useState([])
   useEffect(() =>{
      const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'
      axios.get(URL).then(res => {
         const info = res.data
         setCoins(info)
      }).catch((error) =>{
         console.log(error);
      })
   },[])
   // console.log(coins)
   return (
      <Container>
         {coins.map((value) =>(
         <Link key={value.id}  style={{textDecoration:"none"}} to={`/${value.id}`} >

         <Cards key={value.id} coins={value}/>
         </Link>
         ))}
      </Container>
   )
}

export default CardData
