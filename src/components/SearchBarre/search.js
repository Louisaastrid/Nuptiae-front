import React , {useState,useEffect} from 'react'

export default function Search() {
    
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState('');
    const [searchTerm, setSearchTerm]= useState('');

    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://localhost:44313/api/v1/Catalog/travel')
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
        return <p>loading..</p>;
    }
     if(error !==''){
     return <p>ERROR.. : {error}</p>;
    }
    
    return (
        <div className="test">
        <input
         type="text" 
         placeholder="search..." 
         onChange={event=>{setSearchTerm(event.target.value);
         }}
         />
        {data.filter((val)=>{
            if (searchTerm === ""){
                return val
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
            <div>
                <p>{val.name}</p>
            </div>
            );
        })}

        </div>
    )
}
