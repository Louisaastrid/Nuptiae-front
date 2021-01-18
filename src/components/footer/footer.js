import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Nuptiae
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color:'#ffffff'
  },
   fot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
 
  
  },
  footer: {
    padding: theme.spacing(5, 4),
    marginTop: 'auto',
    backgroundColor: '#2A3848',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="body1"> </Typography>
          <div className={classes.fot}>
               <div> <p></p> </div>
               <div> 
                   <h3> Product </h3>
                   <p>blabla </p>
                   <p>blabla </p>
                   <p>blabla </p>

            </div>
            <div> 
                <h3> Support </h3> 
                   <p>blabla </p>
                   <p>blabla </p>
                   <p>blabla </p>

            </div>
             <div>
                 <h3> Legal </h3>
                    <p>blabla </p>
                   <p>blabla </p>
                   <p>blabla </p>
                    </div>
                <div> <h3> Login </h3></div>
            <div> <h3> Compagny </h3> </div>
            
             </div>
             <hr></hr>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}