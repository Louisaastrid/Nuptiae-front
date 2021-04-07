/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useLocation} from 'react-router-dom'
import { makeStyles} from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import Grid from '@material-ui/core/Grid';
import moment from 'moment'
import Comment from '../components/comment/comment'
import { red } from '@material-ui/core/colors';
export default function detailVoyage() {
     const location = useLocation();
    const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    textAlign  : 'justify'
  },
  rectangle :{
    width:' 10%',
  height: '407px',
  background: red,
  }
    }));
    const classes = useStyles();

    return (
        <>
            <Header/>
      <Navigation/>
        <div className={classes.root}>

            {/* {loading && <div>Chargement...</div>} */}
           {/* {travelData && <div>{travelData.name}</div>} */}
                 <Grid container spacing={2}   direction="row">
  
                 
          
                <div className={classes.paper}> 
                 <Grid item xs={6} sm={5}   direction="row" >
                            <h1>{location.state.nom}</h1>
                            <h4>{location.state.pays}, {location.state.ville}</h4>

                 </Grid>
           <Grid item xs={12} sm={6}>
           <img alt= "blabla " src={location.state.image}/>
           <div>{location.state.description}</div>       
            <div>{location.state.price}€</div>
           <div>{moment(location.state.date).format("DD/MM/YYYY")}</div>
           <hr/>
            <Comment/>
           </Grid>
           </div>
        </Grid>
        </div>
        </>
    )
}
