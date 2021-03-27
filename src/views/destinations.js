/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState} from 'react'
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';
import {Grid} from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import Slider from '../components/Slider/slider'
import useTravel from '../hooks/useTravel';
import Images from '../images'

export default function destinations() {
const cataUrl = useCatImg();
const travelData = useTravel();

const setCard = useState(0);
const loadCard = i =>{setCard(i)}

    return (
        <> 
    <Header/>
      <Navigation/>
     <Slider images={Images}  />
        <Grid container  alignItems="flex-start"
        justify="center"
        direction="row"
        spacing={2} >
     
         {travelData &&travelData.map((item, index)=>(
             <Grid key={index}item md={4}>
             <Card clicked={()=>loadCard(index)}
             key={item.id} 
             name={item.name}
             description = {item.description}
             imageUrl ={cataUrl}
             price={item.price}
            
        /> 
        </Grid>))}
      
     </Grid>
     </>
       
    )   

  
}
