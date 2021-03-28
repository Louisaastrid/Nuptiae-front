/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useLocation, useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation'

export default function detailVoyage() {
     const {id } = useParams();
     const location = useLocation();
const [travelData, loading ]= useFetch('https://localhost:44313/api/v1/Catalog/travels/'+id)
// if(loading){
//     return 'Chargement...'
// }
    return (
        <>
            <Header/>
      <Navigation/>
        <div>
            <h2>Detail de voyage -{id} </h2>
            {/* {loading && <div>Chargement...</div>} */}
           {/* {travelData && <div>{travelData.name}</div>} */}
           <img alt= "blabla " src={location.state.image}/>
           <h1>{location.state.nom}</h1>
           <div>{location.state.description}</div>
           <div>{location.state.price}</div>
           <div>{location.state.ville}</div>
           <div>{location.state.pays}</div>
           <div>{location.state.date}</div>
            
        </div>
        </>
    )
}
