import React from 'react'
import { Typography, Grid  ,Card,CardMedia } from '@material-ui/core';
import CountUp from "react-countup"
import{Container,CardStyle,ImageTag} from  "./style"
import { CaretUpOutlined,CaretDownOutlined } from '@ant-design/icons'
const Cards = ({coins}) => {
   return (
      <Container > 
         
         <Grid container spacing={3}  justify="center">
          
            <Grid   item component={Card}>
            <CardStyle>
               <Typography  variant="h5"  gutterBottom>{coins.name}</Typography>
               
               <ImageTag>
              <CardMedia
                 component="img"
                 // alt="Contemplative Reptile"
                 height="50"
                 width ="10"
                 image={coins.image}
                 // title="Contemplative Reptile"
            />
         </ImageTag>
               <Typography variant="h5">Price: $<CountUp start={0} end={coins.current_price} separator="," /></Typography>
           
              <Typography variant="h6" color="textSecondary" >Last Updated: {new Date(coins.last_updated).toDateString()}</Typography>
               {(coins.price_change_percentage_24h).toFixed(2) < 0 ? 
               (  <Typography color="error" variant="h6"> <span style={{color:"black"}}>Percentage 24h:</span> {(coins.price_change_percentage_24h).toFixed(2)}% <CaretDownOutlined /></Typography>) 
               : (<Typography style={{color:"green"}} variant="h6"> <span style={{color:"black"}}>Percentage 24h:</span> {(coins.price_change_percentage_24h).toFixed(2)}% <CaretUpOutlined /></Typography>)}
             <Typography  variant="h6"  gutterBottom>Market Cap: {coins.market_cap_change_24h.toLocaleString()}</Typography>
            </CardStyle>
            </Grid>
     
         </Grid>  
         {/* <h1>{getData[0].name}</h1> */}
      </Container>
   )
}

export default Cards
