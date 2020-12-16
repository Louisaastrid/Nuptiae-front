import React from 'react'
import {Card, CardContent,Typography ,CardMedia,CardActionArea, makeStyles , CardActions, Button} from '@material-ui/core';
import {string, number} from 'prop-types'

const imageSize = 350;

const style = makeStyles((theme)=>({
  root: {
    maxWidth: imageSize,
    margin:`${theme.spacing(2)}px auto`,
  },
   media: {
    height: 175, // 16:9
    maxWidth: imageSize,

  },
 
}));
export default function card({name, description, price, imageUrl}) {
   const classes = style();
    
    return (
      <Card className={classes.root}>
      <CardActionArea>
       {imageUrl && (<CardMedia className={classes.media}
          component="img"
          alt={name}

          image= {imageUrl}
          title={name}
        />)}
       <CardContent>
          <Typography gutterBottom variant="h5" comriptionponent="h2">
           {name}
          </Typography>
             <Typography variant="paragraph" color="textSecondary" component="p">
           { description}
          </Typography>
             <Typography variant="h6"  component="p">
           à partir de {price}
           
          </Typography>
        
        </CardContent>
     
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
        </Card>
    )
}
Card.prototype ={
    name: string.isRequired ,
    description : string.isRequired,
    price  : number.isRequired,
    imageUrl : string
};

Card.defaultProps ={
  imageUrl : null, 
}
