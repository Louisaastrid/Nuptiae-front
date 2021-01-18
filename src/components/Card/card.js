import React from 'react'
import {Card, CardContent,Typography ,CardMedia,CardActionArea, makeStyles , CardActions, Button , Divider, Grid} from '@material-ui/core';
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
  description_text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
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
          <Grid container alignItems="center">
          <Grid item xs> 
          <Typography gutterBottom variant="h5">
           {name} 
          </Typography>
          </Grid>
          <Grid item> 
              <Typography gutterBottom variant="h6">
           ${price}
         
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
