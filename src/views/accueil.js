/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React , {useState,useEffect}from 'react'
import Galery from '../components/Galery/galery'
import {CircularProgress} from '@material-ui/core';





export default function accueil() {
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
   
         {data.map((test)=>(<Galery key={test.country}/>)).slice(0,1)}
    </>
    )
}
