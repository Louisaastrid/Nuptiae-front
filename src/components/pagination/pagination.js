/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect} from 'react'
import Card from '../Card/card'
import {Grid} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const renderData = (data) => {
  return (
  
     data.map((test)=>(
             <Grid item md={4}>
             <Card  name={test.name}
            description = {test.description}
               

            price={test.price}
        /> 
        </Grid>))
  );
};

export default function pagination() {
    // eslint-disable-next-line react-hooks/rules-of-hooks



    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState('');


    const [currentPage, setCurrentPage]= useState(1);
    const [itemsPerPage, setItemsPerPage]= useState(3);
    const [page, sePage] =useState(1);


    const handleClick = (event)=>{
        setCurrentPage(Number(event.target.id))
    }

    const pages =[]
    for(let i=1;i<=Math.ceil(data.length/itemsPerPage);i++){
        pages.push(i);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem) ;

    const renderPerPageNumber = pages.map(number=>{
        return(
            <li key={number} id={number} onClick={handleClick}>
                {number}
            </li>
        )
    })


     useEffect(()=>{
        setLoading(true);
        fetch('https://localhost:44313/api/v1/Catalog?pageSize=10')
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
        return <p> error </p>;
    }
     if(error !==''){
     return <p>ERROR.. : {error}</p>;
    }



    return (
        <>
        <h1>Pagination </h1>
        {renderPerPageNumber}
        {renderData(currentItems)}
        {/* <Pagination count= {pages.length} pages={currentItems} onClick={handleClick} /> */}
        </>
    )
}


