/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {AppBar,Toolbar,Typography, makeStyles, InputBase } from '@material-ui/core'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

const style = makeStyles(() => ({

  inputRoot: {
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
    
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

  },
   inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
  
}));

export default function navigation({searchTerm}) {
   const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const classes = style();
    return (

        <ThemeProvider theme={theme}>

        <AppBar position="sticky"  className={classes.root}>
        <Toolbar >
          <Typography  variant="h6" className={classes.title} component={Link} to='/' >
           <span className={classes.nameNup}>Nupt</span>
           <span className={classes.nameIae}>iae</span>
           </Typography>
          <Tabs
          value={value}
        indicatorColor="white"
        textColor="white"
        onChange={handleChange}
        aria-label="disabled tabs example">
          <Tab label="Destinations" component={Link} to='/destinations'/>
          <Tab label="Liste de noce" component={Link} to='/liste' />
          <Tab label="Activités" component={Link} to='/activites' />
          <Tab label="Blog" component={Link} to='/blog' />
          <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon />
          </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={searchTerm}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

        </Tabs>

        </Toolbar>
      </AppBar>
</ThemeProvider>
    )
}
