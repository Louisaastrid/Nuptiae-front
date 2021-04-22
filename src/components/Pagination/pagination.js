import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

export default function pagination(page, handleChange) {
    return (
     <Pagination count={10} page={page} onChange={handleChange} />

    )
}
