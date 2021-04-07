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
    logo: {
      marginLeft:'-52px'
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
               <div> 
                <a href="http://localhost:3000/"> 
                  <img 
                    className={classes.logo}
                    src="data:image/png;base64,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"
                    alt="Logà-Nuptiae"
                    />
                 </a> 
                 <p>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor <br/>
                    incididunt ut labore et <br/>
                   
                   </p> </div>
               <div> 
                   <h3> Nuptiae </h3>
                   <p>Qui sommes-nous ?</p>
                   <p>Mentions légales</p>
                   <p>CGV</p>
                   <p>Politique de confidentialité</p>
                   <p>Politique de cookies</p>
                   <p>Plan de site</p>

            </div>
            <div> 
                <h3> Infos pratiques </h3> 
                   <p>Contactez nous </p>
                   <p>Avis clients</p>
                   <p>Voyager avec nuptiae</p>
                   <p>Faq</p>
                   <p>Agence de voyage de noces</p>

            </div>
             <div>
                 <h3>Nos services</h3>
                    <p>votre dossier</p>
                   <p>Devis</p>
                   <p>Nos brochures</p>
                   <p>Espace pro</p>
                    </div>
                <div> <h3> Avant de partir </h3>
                    <p>Bon à savoir</p>
                   <p>Formalités</p>
                   <p>Informations santé   </p>
                   <p>Services additionnels</p>
                   <p>Nos assurances</p>
                   </div>
            <div> <h3> Contact </h3> 
                <p>blabla </p>
                   <p>blabla </p>
                   <p>blabla </p></div>
            
             </div>
             <div>Nous suivre </div>
             <hr></hr>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}