/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react'
import Galery from '../components/Galery/galery'
import {Grid,makeStyles} from '@material-ui/core';
import Card from '../components/Card/card'
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
// import Slider from '../components/Slider/slider'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';




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
  }

 
}));


export default function accueil() {
const classes = style();
const [loading, travelData] = useFetch('http://nuptiaeback.azurewebsites.net/api/v1/Catalog?pageSize=10');


 
    return (
       
     <>
      <Header/>
      <Navigation/>
          {/* <Slider  /> */}
        <div className={classes.root}> 
            {travelData && travelData.map((test)=>(<Galery key={test.country}/>)).slice(0,1)}
        </div>
        <div className={classes.root} >
            <p className={classes.slogan}>Voyez grand</p>
            <h4 className={classes.sentence}>Faites vous plaisir pour une lune de miel magnifique</h4>
        </div>
          <Grid container  alignItems="flex-start"
            justify="center"
            direction="row"
            spacing={2} >

            {travelData&&travelData.map((test)=>(
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
            </Grid>)).splice(travelData.length-3)}
        </Grid>
    </>
    )
}