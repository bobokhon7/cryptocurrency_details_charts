import React,{useState,useEffect} from 'react'
import { useHistory ,useParams } from "react-router-dom";
import axios from 'axios'
import {Container,CardContainer,Image,Officailweb,Title,LineChart,MediaWrapper,IconSize,GoHomeButton,Descreption} from './style'
import { RedditOutlined,TwitterOutlined,GithubOutlined,DoubleLeftOutlined } from '@ant-design/icons'
import { Line } from "react-chartjs-2";
import coinGecko from "../api/coinGecko"
const CoinRouteInfo = () => {

   const {id} = useParams()
   let history = useHistory();
   const[coinDetails,setCoinDetails] = useState([])
   const[marketHistory,setMarketHistory] = useState([])
   const {week } = marketHistory;
  
   const baseURL = `https://api.coingecko.com/api/v3/coins/${id}`
   useEffect(() =>{
      axios.get(baseURL).then(res => {
         const info = res.data
         setCoinDetails(info)
      }).catch((error) =>{
         console.log(error);
      })
   },[baseURL])
   const formatData = (data) => {
      return data.map((el) => {
        return {
          t: el[0],
          y: el[1].toFixed(2),
        };
      });
    };
    useEffect(() => {
      const fetchData = async () => {
        const [ week] = await Promise.all([
          coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }),
          
        ]);
        setMarketHistory({
          week: formatData(week.data.prices),
        });
      
      };
      fetchData();
    }, [id]);
   function handleClick() {
     history.push("/");
   }
  //  console.log(marketHistory);
  console.log(coinDetails);
const data = {
   labels: week?.map(( date ) => new Date(date.t).toLocaleDateString()),
  datasets: [
    {
      label: `${coinDetails?.localization?.ko} / ${coinDetails?.localization?.en}`,
      data: week?.map((value) => value.y),
      fill: false,
      backgroundColor: "#c2d6d633",
      borderColor: "#64c04b"
   }
  ],
};
   return (
      <Container>
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
      <GoHomeButton type="button" onClick={handleClick}>
      <DoubleLeftOutlined style={{paddingRight:"5px"}} />Continue </GoHomeButton>
      </Container>
   )
}

export default CoinRouteInfo

