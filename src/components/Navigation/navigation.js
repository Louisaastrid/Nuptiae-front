/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {AppBar,Toolbar,Typography,Button, makeStyles } from '@material-ui/core'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import  SearchInpput from "../SearchBarre/search";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'


const style = makeStyles(() => ({
  root: {
    zIndex: "1"
  },

  title: {
    flexGrow: 1,
    textDecoration: 'none'   
  },
  nameNup:{
    color:"#d3de32",
    fontSize:"40px"
  },
  nameIae:{
    color:"#00a8cc",
    fontSize:"40px"

  }
}));

export default function navigation() {
   const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const classes = style();
    return (
          <ThemeProvider theme={theme}>

        <AppBar position="static" color='transparent' className={classes.root}>
        <Toolbar >
          <Typography  variant="h6" className={classes.title} component={Link} to='/' >
           <span className={classes.nameNup}>Nupt</span>
           <span className={classes.nameIae}>iae</span>
           </Typography>
          <Tabs
          value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
          <Tab label="Destinations" component={Link} to='/destinations'/>
          <Tab label="Liste de noce" component={Link} to='/liste' />
          <Tab label="Activités" component={Link} to='/activites' />
          <Tab label="Blog" component={Link} to='/blog' />
          {/* <SearchInpput/> */}
        </Tabs>

        </Toolbar>
      </AppBar>
      </ThemeProvider>

    )
}
