import React from 'react'
import {makeStyles } from '@material-ui/core'


const style = makeStyles({
  styleCarou: {
    backgroundColor: "#70af85",

    height: 560,
  },

});
export default function slider() {
   const classes = style();
    return (
        <div className={classes.styleCarou}>

        </div>
    )
}
