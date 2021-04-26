/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react'
import { useQuery  } from "react-query";
import {CircularProgress}  from '@material-ui/core';
import NocesList from '../NocesList'
import Pagination from '@material-ui/lab/Pagination';


const fetechNoces = (page = 0) => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || `https://nuptiaeback.azurewebsites.net/api/v1`;
  return fetch(`${baseUrlApi}/Catalog?pageNum=`+page).then((response) => response.json());
};


export default function destinations() {

  const [page, setPage] = React.useState(0)

  const { status, data } = useQuery(
      ["noces","id", page] ,
      () =>fetechNoces(page),
      {keepPreviousData: true , staleTime: 5000}
      );
    const handleChange = (event, value) => {
       setPage(value);
     };

    return (
        
        <> 
      {/* <Navigation searchTerm = {handleSearchTerm}/> */}
            {status === "loading" && <CircularProgress />}
            {status === "success" &&  <NocesList data={data}/>}
    <Pagination  count={10} page={page} onChange={handleChange} siblingCount={0} />



     {/* <Slider images={Images}  /> */}
        {/* <Grid container  alignItems="flex-start"
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
     </Grid> */}
     </>  
    )   
}
