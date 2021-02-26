/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function pagination({elmentssPerPage, totalEmlements, paginate }) {
    const classes = useStyles();

    const pageNumber =[];

    for(let i =1 ; i<= Math.ceil(totalEmlements/elmentssPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <div className={classes.root}>
          {pageNumber.map(number=>(<Pagination count={10} variant="outlined" onClick={() => paginate(number)}>{number}</Pagination>))}
          {/* <Pagination count={70} variant="outlined"></Pagination> */}

        </div>
    )
}
