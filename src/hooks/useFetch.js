/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'

export default function useFetch(url) {
 const [state, setstate] = useState({
     items:[],
     loading: true, 
 })
useEffect(function(){
    (async function(){
        const response = await fetch(url)
        const responseData = await response.json()
        if (response.ok){
           setstate({
               items:responseData,
               loading: false
           })
        }else{
            alert(JSON.stringify(responseData))
            setstate(s=>({...s, loading: false}))
        }
    })()
}, [])


    return[
        state.loading,
        state.items
    ]
}

