import React,{useState,useEffect} from 'react'
import {  useParams } from "react-router-dom";
import axios from 'axios'
import {Container,LineChart,LinkBox,LinkTag,DataContainer,CoinWrapper,InfoWrapper,MarketInfoWrapper,Image,CoinPrice,CoinTitle,MediaWrapper,Box1,MoneyInfoWrapper,Descreption,TextTitle} from './style'
import { RedditOutlined,TwitterOutlined,GithubOutlined } from '@ant-design/icons'
import { Line } from "react-chartjs-2";
import coinGecko from "../api/coinGecko"
import Footer from '../Footer';
const CoinRouteInfo = () => {

   const {id} = useParams()
   const[coinDetails,setCoinDetails] = useState([])
   const[marketHistory,setMarketHistory] = useState([])
   const[isLoading,setIsLoading] = useState(false)

   const {week } = marketHistory;
  
   const baseURL = `https://api.coingecko.com/api/v3/coins/${id}`
   useEffect(() =>{
      axios.get(baseURL).then(res => {
         const info = res.data
         setCoinDetails(info)
         setIsLoading(true)
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
              days: "30",
            },
          }),
          
        ]);
        setMarketHistory({
          week: formatData(week.data.prices),
        });
        setIsLoading(true)
      
      };
      fetchData();
    }, [id]);
 
  //  console.log(marketHistory);
  console.log(coinDetails);
const data = {
   labels: week?.map(( date ) => new Date(date.t).toLocaleDateString()),
  datasets: [
    {
      label: `${coinDetails?.localization?.en}`,
      data: week?.map((value) => value.y),
      
      fill: false,
      backgroundColor: "#29bdbd33",
      borderColor: "#64c04b",
      circular: false,
      
      
   }
  ],
};

   return (
      <Container>
        {isLoading? 
     (<>
      <DataContainer>
        <InfoWrapper>
           <CoinWrapper>

          <CoinTitle>
            <Image src={coinDetails?.image?.large}/>   {coinDetails.name} ({(coinDetails?.symbol?.toUpperCase())})
          </CoinTitle>
          <MediaWrapper>
            <CoinTitle FontSize>Market Cap</CoinTitle>
            <Box1>Rank #{coinDetails.coingecko_rank}</Box1>
          </MediaWrapper>
          <MediaWrapper>
            {coinDetails?.links?.homepage[0] ? (<><CoinTitle FontSize>Website</CoinTitle>
            <LinkBox changeWidth> 
              <LinkTag target="_blank"  href={coinDetails?.links?.homepage[0]} alt="coin">
                {`${coinDetails?.links?.homepage[0]}`}</LinkTag>
              </LinkBox></>): null}
            
          </MediaWrapper>
          <MediaWrapper>
            <CoinTitle>Coomunity</CoinTitle>
            <Box1 changeView> 
            <LinkTag target="_blank" href={coinDetails?.links?.subreddit_url} >
              <RedditOutlined style={{fontSize:"20px",justifyContent:"center",alignItems:"center",position:"relative", left:"-5px",bottom:"4px"}}/>
                Reddit
            </LinkTag>
            </Box1>
            
            <Box1 changeView> 
            <LinkTag target="_blank" href={coinDetails?.links?.subreddit_url} >
              <TwitterOutlined style={{fontSize:"20px",justifyContent:"center",alignItems:"center",position:"relative", left:"-5px",bottom:"4px"}}/>
              Twitter
            </LinkTag>
            </Box1>
             
            {/* <Box1 changeView> 
            <LinkTag target="_blank" href={`https://www.facebook.com/${id}`} >
              <FacebookOutlined style={{fontSize:"20px",justifyContent:"center",alignItems:"center",position:"relative", left:"-5px",bottom:"4px"}}/>
                Facebook
            </LinkTag>
            </Box1> */}
          </MediaWrapper>
             
          <MediaWrapper>
             <CoinTitle>Source Code</CoinTitle>
            <Box1 changeView changeMargin>
            <LinkTag target="_blank" href={coinDetails?.links?.repos_url?.github[0]} >
              <GithubOutlined style={{fontSize:"20px",justifyContent:"center",alignItems:"center",position:"relative", left:"-5px",bottom:"4px"}}/>
                Github
            </LinkTag>
            </Box1>
          </MediaWrapper>
          <MediaWrapper>
             <CoinTitle>Tags</CoinTitle>
            <LinkBox changeView changeMargin move>
            <LinkTag target="_blank" href='https://www.coingecko.com/en/categories/cryptocurrency' >
    
              Cryptocurrency
            </LinkTag>
            </LinkBox>
          </MediaWrapper>
          </CoinWrapper>
        
        
        </InfoWrapper>

        <MarketInfoWrapper>
        <CoinPrice>
        ${(coinDetails?.market_data?.current_price?.usd)?.toLocaleString()} 

    
        {coinDetails?.market_data?.price_change_percentage_24h < 0 ? 
        ( <span style={{fontSize:"20px",color:"red",padding:"5px"}}>{(coinDetails?.market_data?.price_change_percentage_24h)?.toFixed(2)}%</span>) :
        ( <span style={{fontSize:"20px",color:"green",padding:"5px"}}>{(coinDetails?.market_data?.price_change_percentage_24h)?.toFixed(2)}%</span>)}
        </CoinPrice>
       
       <MoneyInfoWrapper>
         {coinDetails?.market_data?.market_cap?.usd?(<>   
          <TextTitle>
           <strong>Market Cap</strong>
         </TextTitle>
         <TextTitle changeFontSize>
           ${(coinDetails?.market_data?.market_cap?.usd)?.toLocaleString()}
         </TextTitle></>): null}
     

          {coinDetails?.market_data?.max_supply?(<>  <TextTitle>
           <strong>Max Supply</strong>
         </TextTitle>
         <TextTitle changeFontSize>
           ${(coinDetails?.market_data?.max_supply)?.toLocaleString()}
         </TextTitle></>): null}
       
        {coinDetails?.market_data?.total_volume?.usd?(<>
        <TextTitle>
           <strong>Total Valume</strong>
         </TextTitle>
         <TextTitle changeFontSize>
           ${(coinDetails?.market_data?.total_volume?.usd)?.toLocaleString()}
         </TextTitle></>):null}
         
         {coinDetails?.market_data?.low_24h?.usd && coinDetails?.market_data?.high_24h?.usd ?(<> 
         <TextTitle>
           <strong>24h Low / 24h High</strong>
         </TextTitle>
         <TextTitle changeFontSize>
           ${(coinDetails?.market_data?.low_24h?.usd)?.toLocaleString()} / ${(coinDetails?.market_data?.high_24h?.usd)?.toLocaleString()}
         </TextTitle></>):
        null}
         

       </MoneyInfoWrapper>

        </MarketInfoWrapper>
      </DataContainer>
               
        <LineChart>
        <Line data={data} />
         
        {coinDetails?.description?.en?(<Descreption>
        <h5 style={{textAlign:"center",fontSize:"30px"}}><strong>Description</strong></h5>
          {(coinDetails?.description?.en)?.replace(/<[^>]+>/g, '')}
        </Descreption>): null}
        
        </LineChart>
        <Footer/>
    </>):
    (<img alt="loading" src='https://thumbs.gfycat.com/CriminalWhichEasteuropeanshepherd-size_restricted.gif'/>)}
        
 
      </Container>
   )
}

export default CoinRouteInfo

