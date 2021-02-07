import React ,{useState, useEffect}  from 'react'

export default function useTravel() {


 const [dataTravel, setDataTravel] = useState();



  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('https://localhost:44313/api/v1/Catalog/travel');
      const data = await response.json();
      // console.log(data)
      setDataTravel(data[0].url)
    }

    fetchData();
  },[])
 return  dataTravel;
}
