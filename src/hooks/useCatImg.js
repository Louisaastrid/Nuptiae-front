import  {useState, useEffect} from 'react'
   
   export default function useCatImg() {
          
   const [dataImg, setDataImg] = useState();



  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      // console.log(data)
      setDataImg(data[0].url)
    }

    fetchData();
  },[])
 return  dataImg;
   
}
   