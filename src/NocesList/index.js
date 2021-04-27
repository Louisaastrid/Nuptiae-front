/* eslint-disable no-undef */
import React ,{useState}  from 'react'
import { Grid } from "@material-ui/core";
import CardNoces from "../components/Card/card"
import { arrayOf, shape, func } from "prop-types";
import {Link } from 'react-router-dom'
import Navigation from '../components/Navigation/navigation'



export default function NocesList({data}) {
    const [searchTerm, setSearchTerm] = useState("")
        const [Term, setTerm] = useState("")


const handleSearchTerm = (e) => {
let value = e.target.value
setSearchTerm(value);
};
    return (
        <>
              <Navigation searchTerm = {handleSearchTerm}/>
                    

       <Grid container justify="space-evenly">
           
      { data.filter((item)=>{
           return item.country.toUpperCase().includes(searchTerm.toUpperCase(),Term);
        }).map((item) => (
        <Grid key={item.id} item md={4} xs={6} spacing={8}>
             <Link style={{ textDecoration: 'none' }} to={{
                    pathname:`/destination/${item.id}`,
                    state:{name :item.name,
                    description:item.description,
                    price: item.price,
                    image :item.picture,
                    date : item.departure, 
                    country : item.country,
                    town : item.town
                    }}}>    
              <CardNoces            
            name={item.name}
            description = {item.description}
            picture ={item.picture}
            price={item.price}
            /> </Link>
        </Grid>
      ))}
    </Grid>
    </>
    )
}

NocesList.prototype = {
  data: arrayOf(shape(CardNoces.prototypes)),
  addToList: func,
};
NocesList.defaultProps = {
  data: [],
  addToList: Function.prototype,
};