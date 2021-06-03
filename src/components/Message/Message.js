import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'red',
  }
}));

const ErrorMessage = (props) => {
  const classes = useStyles();

  return (    
    <div className={classes.root}>
      {props.msg}
    </div>
  )  
}

export default ErrorMessage;