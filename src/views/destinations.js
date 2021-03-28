/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react'
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';
import {Grid, makeStyles} from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import Slider from '../components/Slider/slider'
import Images from '../images'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export default function destinations() {
 
const cataUrl = useCatImg();
const [loading, travelData] = useFetch('https://localhost:44313/api/v1/Catalog?pageSize=10');


if(loading){
    return 'Chargement...'
}
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
                <Link to={{
                    pathname:`/destination/${item.id}`,
                    state:{ nom : item.name,
                    description: item.description,
                    price: item.price,
                    image : cataUrl,
                    date : item.departure, 
                    pays : item.country,
                    ville : item.town}}}> 
                        <Card  
                        key={item.id} 
                        name={item.name}
                        description = {item.description}
                        imageUrl ={cataUrl}
                        price={item.price}/> 
                </Link>
         
        </Grid>))} 
     </Grid>
     </>  
    )   
}
