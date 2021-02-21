import React from 'react'


export default function error404page({history}) {
    return (
        <div style={{marginLeft:"10px"}}>
            <h2>404 page </h2>  
            <p>Redirecting to <span style={{color:"pink", cursor:'pointer'}} onClick={()=>history.push('/')}> Page</span></p>          
        </div>
    )
}
