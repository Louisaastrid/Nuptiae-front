/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React , {useState,useEffect}from 'react'
import Galery from '../components/Galery/galery'
import {Grid, CircularProgress, makeStyles} from '@material-ui/core';
import Card from '../components/Card/card'
import useCatImg from '../hooks/useCatImg';


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
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState('');
    const [data, setData] = useState([1]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://localhost:44313/api/v1/Catalog')
        .then((response)=>response.json())
        .then((data)=>{
            setLoading(false);
            setData(data);
        })
        .catch((e)=>{
            setLoading(false);
            setError('fetch failed');
        });
    },[]);

    if(loading){
        return <p>  <CircularProgress color="#00a8cc" /></p>;
    }
     if(error !==''){
     return <p>ERROR.. : {error}</p>;
    }
    return (
       
     <>
        <div className={classes.root}> 
            {data.map((test)=>(<Galery key={test.country}/>)).slice(0,1)}
        </div>
        <div className={classes.root} >
            <p className={classes.slogan}>Voyez grand</p>
            <h4 className={classes.sentence}>Faite vous plaisir pour une lune de miel magnifique</h4>
        </div>

        <Grid container  alignItems="flex-start"
            justify="center"
            direction="row"
            spacing={2} >

            {data.map((test)=>(<Grid item md={4}><Card  name={test.name}description = {test.description} imageUrl ={cataUrl}
            price={test.price}/> 
            </Grid>)).splice(data.length-3)}
        </Grid>
    </>
    )
}
