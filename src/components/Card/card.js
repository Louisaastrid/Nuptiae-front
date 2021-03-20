/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {Card, CardContent,Typography ,CardMedia,CardActionArea, makeStyles  , Grid} from '@material-ui/core';
import {string, number} from 'prop-types'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const imageSize = 500;

const style = makeStyles((theme)=>({
  root: {
    maxWidth: imageSize,
    margin:`${theme.spacing(2)}px auto`,
  },
   media: {
    height: 175, // 16:9
    maxWidth: imageSize,

  },
  modalStyle:{
    backgroundColor:"#7bc0a3",
  },
  description_text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
  },
  card_title_style:{
    color: '#00a8cc',
  }
 
}));

export default function card({id,name, description, price, imageUrl, onClick }) {
   const classes = style();
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <> 
      <Card key={id} onClick={onClick} className={classes.root}>
      <CardActionArea>
       {imageUrl && (<CardMedia className={classes.media}
          component="img"
          alt={name}
          image= {imageUrl}
          title={name}
        />)}
       <CardContent>
          <Grid container alignItems="center">
          <Grid item xs> 
          <Typography gutterBottom variant="h4" className={classes.card_title_style}>
           {name} 
          </Typography>
          </Grid>
          <Grid item> 
              <Typography gutterBottom variant="h6">
            à partir de {price}€ 
          </Typography>
            </Grid>
          </Grid>
             <Typography className={classes.description_text} variant="body2" color="textSecondary" component="p" >
         { description}
          </Typography> 
           
        </CardContent> 
        </CardActionArea>
         <CardActions>
        <Button size="small" color="primary">
          Ajouter à la liste 
        </Button>
        <Button variant="contained"  size="small" color="primary" style={classes.button} onClick={handleOpen} >
          Voir plus
        </Button>
         <Modal className = {classes.modalStyle} open={open} onClose={handleClose} aria-labelledby={id} aria-describedby={id}>
                  <div>
                    <img className={classes.media} alt={id} src={imageUrl}></img>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{price}€</p>

                  </div>
                </Modal>
      </CardActions>
             

        </Card>
         {/* <Modal onClose={handleClose} item={description} aria-labelledby={name} aria-describedby={description}/> */}
        </>
    )
}
Card.prototype ={
    id: number,
    name: string.isRequired ,
    description : string.isRequired,
    price  : number.isRequired,
    imageUrl : string
};

Card.defaultProps ={
  imageUrl : null, 
}
