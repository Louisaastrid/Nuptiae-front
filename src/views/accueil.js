/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react'
import Galery from '../components/Galery/galery'
import {Grid,makeStyles} from '@material-ui/core';
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import useTravel from '../hooks/useTravel';
import Images from '../images'
import Slider from '../components/Slider/slider'



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
    const cataUrl = useCatImg();
    const travelData = useTravel();


   
    
    return (
       
     <>
      <Header/>
      <Navigation/>
          <Slider images={Images}  />

        <div className={classes.root}> 
            {travelData && travelData.map((test)=>(<Galery key={test.country}/>)).slice(0,1)}
        </div>
        <div className={classes.root} >
            <p className={classes.slogan}>Voyez grand</p>
            <h4 className={classes.sentence}>Faite vous plaisir pour une lune de miel magnifique</h4>
        </div>

        <Grid container  alignItems="flex-start"
            justify="center"
            direction="row"
            spacing={2} >

            {travelData&&travelData.map((test)=>(<Grid item md={4}><Card  name={test.name}description = {test.description} imageUrl ={cataUrl}
            price={test.price}/> 
            </Grid>)).splice(travelData.length-3)}
        </Grid>
    </>
    )
}