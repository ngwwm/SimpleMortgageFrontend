import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Applicant.css'

export class Applicant extends Component {
  static displayName = Applicant.name;

  render () {
    return (
      <div>
        <h1>Hi There!</h1>
        <p>Welcome to Simple Mortgage App, simply provide us the basic information, we will get you started:</p>
            <form className={classes.Applicant} noValidate autoComplete="off">
                <TextField id="idFirstName" label="First Name" />
                <TextField id="idLastName" label="Last Name" />
                <TextField id="idEmail" label="Email" />
            </form>
      </div>
    );
  }
}