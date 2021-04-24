import React from 'react'
import {Button, makeStyles, Box   } from '@material-ui/core'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Link} from 'react-router-dom'

const style = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
    button: {
    width:'30px' ,
  },
    
  header : {
    backgroundColor: '#2A3848',
    color: '#ffffff',
    display :"flex" ,
    justifyContent :"flex-end"
  },
    coor : {
    color: '#ffffff',
  },
}));


export default function header() {
const classes = style();

    return (
    <Box className={classes.header}>
          <Button className={classes.coor} component={Link} to='/inscription'> <SupervisorAccountIcon/>  Mon compte </Button>
    </Box>
    )
}
