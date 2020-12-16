import React from 'react'
import {AppBar,Toolbar,Typography,Button, makeStyles } from '@material-ui/core'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


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
}));


export default function header() {
const classes = style();

    return (
             <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            Nuptiae
          </Typography>    
          <Tabs>
          <Tab label="Accueil">
          </Tab>
          <Tab label="Destinations" />
          <Tab label="Activités" />
          <Tab label="Liste de noce" />
          <Tab label="Blog" />
        </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}
