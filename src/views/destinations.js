/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';
import {Grid} from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import Slider from '../components/Slider/slider'
import useTravel from '../hooks/useTravel';

export default function destinations() {
const cataUrl = useCatImg();
const travelData = useTravel();

    return (
        <> 
<Header/>
      <Navigation/>
      <Slider/>
        <Grid container  alignItems="flex-start"
        justify="center"
        direction="row"
        spacing={2} >
     
         {travelData &&travelData.map((item)=>(
             <Grid item md={4}>
             <Card  name={item.name}
            description = {item.description}
                imageUrl ={cataUrl}

            price={item.price}
        /> 
        </Grid>))}
     </Grid>
     </>
       
    )
}
