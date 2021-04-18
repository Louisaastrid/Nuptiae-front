/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState}  from 'react'
import Card from '../components/Card/card'
import {Grid} from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
// import Slider from '../components/Slider/slider'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export default function destinations() {
 
const [loading, travelData] = useFetch('https://localhost:58579/api/v1/Catalog?pageSize=10');
const [searchTerm, setSearchTerm] = useState("")


const handleSearchTerm = (e) => {
let value = e.target.value
setSearchTerm(value);
};


if(loading){
    return 'Chargement...'  
}
    return (
        
        <> 
    <Header/>
      <Navigation searchTerm = {handleSearchTerm}/>
     {/* <Slider images={Images}  /> */}
        <Grid container  alignItems="flex-start"
        justify="center"
        direction="row"
        spacing={2} >   
        { travelData.filter((item)=>{
           return item.country.includes(searchTerm);
        }).map( ( item, index)=>(
           
             <Grid key={index}item md={4}>
                <Link style={{ textDecoration: 'none' }} to={{
                    pathname:`/destination/${item.id}`,
                    state:{ nom : item.name,
                    description: item.description,
                    price: item.price,
                    image : item.picture,
                    date : item.departure, 
                    pays : item.country,
                    ville : item.town}}}> 
                        <Card   
                        key={item.id} 
                        name={item.name}
                        description = {item.description}
                        imageUrl ={item.picture}
                        price={item.price}/> 
                </Link>
         
        </Grid>))}
     </Grid>
     </>  
    )   
}
