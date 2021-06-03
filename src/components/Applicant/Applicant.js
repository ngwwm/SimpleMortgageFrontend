import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {    
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Applicant = (props) => {
  const classes = useStyles();

  return (
      <div>
        <h1>Hi There!</h1>

        <p>Welcome to Simple Mortgage App, simply provide us below basic information, we will get you started:</p>
            <div className={classes.root} noValidate autoComplete="off">                        
              <Grid container spacing={0} direction="row" justify="flex-start" alignItems="baseline">
                <Grid item xs={"auto"}>
                  <TextField id="idFirstName" disabled={props.applicant.id > 0} label="First Name" name="firstName" value={props.applicant.firstName} onChange={props.onApplicantChange} className={classes.textField} margin="dense" variant="outlined" />
                </Grid>
                <Grid item xs={"auto"}>
                  <TextField id="idLastName" disabled={props.applicant.id > 0} label="Last Name" name="lastName" value={props.applicant.lastName} onChange={props.onApplicantChange} className={classes.textField} margin="dense" variant="outlined" />
                </Grid>
              </Grid>
              
              <Grid container spacing={0} direction="row" justify="flex-start" alignItems="baseline">
                <Grid item xs={"auto"}>
                  <TextField id="idEmail" disabled={props.applicant.id > 0} label="Email" name="email" value={props.applicant.email} onChange={props.onApplicantChange} className={classes.textField} margin="dense" variant="outlined" />
                </Grid>
                <Grid item xs={"auto"}>
                  <TextField id="idDOB" disabled={props.applicant.id > 0} label="Date of Birth" type="date"  name="dob" value={props.applicant.dob} onChange={props.onApplicantDatePickerChange} 
                    className={classes.textField} margin="dense" variant="outlined"  InputLabelProps={{shrink: true}}/>
                </Grid>
              </Grid>              
              <Grid container spacing={0} direction="row" justify="center" alignItems="baseline">
                <Grid item xs={12}>
                  <Button variant="contained" disabled={props.applicant.id > 0} color="primary" onClick={props.onNext} disableElevation>Continue</Button>
                </Grid>
              </Grid>  
              <Grid container spacing={0} direction="row" justify="flex-start" alignItems="baseline">
                <Grid item xs={"auto"}>
                  <TextField id="idPropertyValue" disabled={props.applicant.id === 0} name="propertyValue" value={props.loan.propertyValue} onChange={props.onLoanChange} className={classes.textField} label="Property Value £" margin="dense" variant="outlined" />
                </Grid>
                <Grid item xs={"auto"}>
                  <TextField id="idDepositAmount" disabled={props.applicant.id === 0} name="depositAmount" value={props.loan.depositAmount} onChange={props.onLoanChange} className={classes.textField} label="Deposit Amount £" margin="dense" variant="outlined" />
                </Grid>  
              </Grid>
              <Grid container spacing={3} direction="row" justify="flex-start" alignItems="baseline">
                <Grid item xs={"auto"}>
                  <Button variant="contained" disabled={props.applicant.id === 0} color="primary" onClick={props.onSearch} disableElevation>Get Mortgage Plans</Button>                   
                </Grid>
                <Grid item xs={"auto"}>
                  <Button variant="contained" disabled={props.applicant.id === 0} color="primary" onClick={props.onStartOver} disableElevation>Start Over</Button>
                </Grid>  
              </Grid>            
            </div>            
      </div>
  );
}

export default Applicant;