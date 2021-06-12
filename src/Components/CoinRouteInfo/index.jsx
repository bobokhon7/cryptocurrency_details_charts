import React,{useState,useEffect} from 'react'
import { useHistory ,useParams } from "react-router-dom";
import axios from 'axios'
import {Container,CardContainer,Image,Officailweb,Title,LineChart,MediaWrapper,IconSize,Descreption} from './style'
import { RedditOutlined,TwitterOutlined,GithubOutlined } from '@ant-design/icons'
import { Line } from "react-chartjs-2";


const CoinRouteInfo = () => {
   const {id} = useParams()
   let history = useHistory();
   const[coinDetails,setCoinDetails] = useState([])
   

   const baseURL = `https://api.coingecko.com/api/v3/coins/${id}`
   useEffect(() =>{
      axios.get(baseURL).then(res => {
         const info = res.data
         setCoinDetails(info)
        
      }).catch((error) =>{
         console.log(error);
 
      })
   },[baseURL])

   console.log(coinDetails);
   function handleClick() {
     history.push("/");
   }
  


const data = {
  labels: coinDetails?.market_data?.ath_date?.usd,
  datasets: [
    {
      label: "Increased",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "#c2d6d633",
      borderColor: "#64c04b"
    },
    {
      label: "Decreased",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#d52038"
    }
  ]
};

   return (
      <Container>
      <button type="button" onClick={handleClick}>
      Go home </button>
     
  
         <CardContainer>
         <Image src={coinDetails?.image?.large }/>
         <Title>{coinDetails?.localization?.ko}{coinDetails?.localization?.en}</Title>
         <MediaWrapper changeSize>
            <IconSize>  <RedditOutlined /></IconSize>
            <IconSize changeColor> <TwitterOutlined /></IconSize>
         </MediaWrapper>
         
         <MediaWrapper >
            <Title sizeChange >{(coinDetails?.community_data?.reddit_subscribers)?.toLocaleString()}</Title>
            <Title sizeChange >{(coinDetails?.community_data?.twitter_followers)?.toLocaleString()}</Title>
         </MediaWrapper>

         <MediaWrapper>
         <Officailweb  as='a' target='_blank' href={coinDetails?.links?.blockchain_site[0]}>Offical Website</Officailweb>
        
         <Officailweb  leftChange as='a' target='_blank' href={coinDetails?.links?.repos_url?.github[0]}><GithubOutlined style={{marginRight:"5px"}}/>  Github</Officailweb>
         </MediaWrapper>
      </CardContainer>
      
      <LineChart>

      <Line data={data} />
      </LineChart>

      <Descreption>
         <h4>Description/기술</h4>
         <p style={{marginTop:"15px"}}>{(coinDetails?.description?.ko)?.slice(0,471)}</p>
         <p  style={{marginTop:"15px"}}>{(coinDetails?.description?.en)?.slice(0,458)}</p>
      </Descreption>
      </Container>
   )
}

export default CoinRouteInfo
