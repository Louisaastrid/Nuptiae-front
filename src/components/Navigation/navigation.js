/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {AppBar,Toolbar,Typography,Button, makeStyles } from '@material-ui/core'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import  SearchInpput from "../SearchBarre/search";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";


const style = makeStyles(() => ({
  root: {
    zIndex: "1"
  },

  title: {
    flexGrow: 1,
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
          <Typography variant="h6" className={classes.title} >
           <span className={classes.nameNup}>Nupt</span>
           <span className={classes.nameIae}>iae</span>
           </Typography>
          <Tabs
          value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
          <Tab label="Destinations" />
          <Tab label="Liste de noce" />
          <Tab label="Activités" />
          <Tab label="Blog" />
          {/* <SearchInpput/> */}
        </Tabs>

        </Toolbar>
      </AppBar>
      </ThemeProvider>

    )
}
