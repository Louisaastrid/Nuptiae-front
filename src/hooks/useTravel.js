import {useState, useEffect}  from 'react'
// import { CircularProgress} from '@material-ui/core';

export default function useTravel() {
// const [loading, setLoading]= useState(true);
// const [error, setError]= useState('');
const [data, setData] = useState();
 useEffect(()=>{
    const fetchDataTravel = async ()=>{
      const response = await fetch('https://localhost:44313/api/v1/Catalog?pageSize=10');
      const data = await response.json();
      // console.log(data)
      setData(data)
    }

    fetchDataTravel();
  },[])
 return  data;
 
}
