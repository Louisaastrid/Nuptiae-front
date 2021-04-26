/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react'
import Galery from '../components/Galery/galery'
import {Grid,makeStyles,CircularProgress} from '@material-ui/core';
import Card from '../components/Card/card'
import Navigation from '../components/Navigation/navigation'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Carousel from '../components/Carousel/Carousel'
import Filter from '../components/Filter/filter'
import useTrip from '../fetch/fetchCatalog'
import { useQuery  } from "react-query";

const style = makeStyles((theme)=>({
  root: {
     textAlign: 'center',
     paddingTop: '53px',
     
  },
   slogan: {
     color: '#00a8cc',
     fontSize: '20px',
     fontStyle: 'italic',
     fontWeight: 'normal'
  },
   sentence: {
     color: '#707070',
     fontSize: '25px',
     fontWeight: 'normal'
  },
     filter: {
    alignContent: 'center',
  }

 
}));


export default function accueil() {
  const { isFetching, data: noces } = useTrip();
  
const fetechNoces = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || `https://nuptiaeback.azurewebsites.net/api/v1`;
  return fetch(`${baseUrlApi}/Catalog`).then((response) => response.json());
};
const classes = style();
const [loading, travelData] = useFetch('http://nuptiaeback.azurewebsites.net/api/v1/Catalog?pageSize=10');
  const { status, data } = useQuery(
      ["noces","id"] ,
      () =>fetechNoces(),
      {keepPreviousData: true , staleTime: 5000}
      );
 
    return (
       
     <>
      <Navigation/>
         <Carousel/>
           {status === "loading" && <CircularProgress />}
            {status === "success" && <>

  
        <div className={classes.root}> 
           <Galery />
        </div>
        <div className={classes.root} >
            <p className={classes.slogan}>Voyez grand</p>
            <h4 className={classes.sentence}>Faites vous plaisir pour une lune de miel magnifique</h4>
        </div>
          <Grid container  alignItems="flex-start"
            justify="center"
            direction="row"
            spacing={2} >


            {data&&data.map((test)=>(
            <Grid item md={4}>
                  <Link style={{ textDecoration: 'none' }} to={{
                    pathname:`/destination/${test.id}`,
                    state:{
                    nom : test.name,
                    description: test.description,
                    price: test.price,
                    image : test.picture,
                    date : test.departure, 
                    pays : test.country,
                    ville : test.town}}}> 
              <Card  name={test.name}description = {test.description} imageUrl ={test.picture}
            price={test.price}/> 
             </Link>
            </Grid>)).splice(data.length-3)}
        </Grid> </>}
    </>
    )
}