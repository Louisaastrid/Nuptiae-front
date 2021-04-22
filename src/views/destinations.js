/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState}  from 'react'
import { useQuery  } from "react-query";
import Card from '../components/Card/card'
import {CircularProgress}  from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'
import {Link } from 'react-router-dom'
import NocesList from '../NocesList'
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';


const fetechNoces = (page = 0) => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || `https://nuptiaeback.azurewebsites.net/api/v1`;
  return fetch(`${baseUrlApi}/Catalog?pageNum=`+page).then((response) => response.json());
};


export default function destinations() {

// const [loading, travelData] = useFetch('https://nuptiaeback.azurewebsites.net/api/v1/Catalog?pageSize=10');
const [searchTerm, setSearchTerm] = useState("")

const handleSearchTerm = (e) => {
let value = e.target.value
setSearchTerm(value);
};
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
    <Header/>
      <Navigation searchTerm = {handleSearchTerm}/>
            {status === "loading" && <CircularProgress />}
            {status === "success" && 
            
             <NocesList data={data} >  </NocesList>
            }




      <Pagination  count={10} page={page} onChange={handleChange} siblingCount={0} />

<Button onClick={()=> setPage(1)}>Page 1</Button>
<Button onClick={()=> setPage(2)}>Page 3</Button>
<Button onClick={()=> setPage(3)}>Page 3</Button>

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
