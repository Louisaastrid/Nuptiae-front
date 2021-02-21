import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Nice',
    width: '20%',


  },
  {
    url: 'https://images.unsplash.com/photo-1605045480816-a7efa537275c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmQlMjB0cmF2ZWx8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Thailande',
    width: '20%',
   

  },
  {
    url: 'https://images.unsplash.com/photo-1568130314431-517b84798ae6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG5pY2V8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Thailande',
    width: '25%',
  },
  {
    url: 'https://images.unsplash.com/photo-1613388164576-a1c41ee84ec3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFyb2N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Thailande',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Tunisie',
    width: '20%',
  },
  {
    url: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Rome',
    width: '25%', 

  },
  {
    url: 'https://images.unsplash.com/photo-1558641899-7f34c70fac6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9taW5pY2FuJTIwcmVwdWJsaWN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Grèce',
    width: '20%',
  },
  {
    url: 'https://images.unsplash.com/photo-1511914265872-c40672604a80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmFkb3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Maroc',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
  },
  image: {
    margin : 2,
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },

    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function galery({title}) {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            height: image.height,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
