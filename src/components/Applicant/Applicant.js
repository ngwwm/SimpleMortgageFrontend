import React, { useState } from 'react';
import { parseISO } from 'date-fns'

import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";

//import classes from './Applicant.css'
import { makeStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Applicant = () => {
  const classes = useStyles();
  const [ applicant, setApplicant] = useState({    
      "id": 0,
      "firstName": "",
      "lastName": "",
      "dob": "",
      "email": ""          
  });  
  const [ propertyValue, setPropertyValue] = useState(100);
  const [ depositAmount, setDepositAmount] = useState(1);

  const selectInsertApplicantHandler = () => {
    const url = process.env.REACT_APP_SIMPLEMORTGAGE_API_SERVER + '/applicants';
    const options = {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body:  JSON.stringify({
        "firstName": "Martin",
        "lastName": "NG",
        "dob": "1997-07-01",
        "email": "martinxxxx@gmail.xom"
      })
    };
    fetch(url, options)
      .then(response => response.json())
      .then(function (data) {   
        console.log(data);
        setApplicant(() => {          
          return Object.assign({}, {id: data.id, firstName: data.firstName, dob: parseISO(data.dob), lastName: data.lastName, email: data.email})
        })
      })
      .catch((error) => {
        console.error('Érror:', error);
      });
  }

  const searchMortgageProductHandler = () => {
    const url = process.env.REACT_APP_SIMPLEMORTGAGE_API_SERVER + '/products/applicant/' + applicant.id;
    const params = {propertyVal: propertyValue, depositAmt: depositAmount}
   
    fetch(url + '?' + new URLSearchParams(params).toString())
      .then(response => response.json())
      .then(function (data) {         
        console.log(data);
      })
      .catch((error) => {
        console.error('Érror:', error);
      });
  }

  const propertyValueChangeHandler = event => {
    setPropertyValue(event.target.value);
  };

  return (
      <div>
        <h1>Hi There!</h1>
        <p>Welcome to Simple Mortgage App, simply provide us below basic information, we will get you started:</p>
            <div className={classes.root} noValidate autoComplete="off">            
              <div>
                <TextField id="idFirstName" label="First Name" value={applicant.firstName} className={classes.textField} margin="dense" variant="outlined" />
                <TextField id="idLastName" label="Last Name" value={applicant.lastName} className={classes.textField} margin="dense" variant="outlined" />
                </div>
                <div>                  
                <DatePicker id="idDOB" placeholderText="Date of Birth" label="Date of Birth" dateFormat='yyyy-MM-dd' 
                  selected={applicant.dob} onChange={(date) => setApplicant(preState => { return { ...preState, dob: date}})} />
                  </div>
                <TextField id="idEmail" label="Email" value={applicant.email} className={classes.textField} margin="dense" variant="outlined" />
                <button className="btn btn-primary" onClick={selectInsertApplicantHandler}>Next</button>
                <div>
                <TextField id="idPropertyValue" className={classes.textField} value={propertyValue} onChange={propertyValueChangeHandler} label="Property Value £" margin="dense" variant="outlined" />
                <TextField id="idDepositAmount" className={classes.textField} value={depositAmount} onChange={(amt) => setDepositAmount(amt.target.value)} label="Deposit Amount £" margin="dense" variant="outlined" />
                </div>
                <button className="btn btn-primary" onClick={searchMortgageProductHandler}>Search</button>
            </div>
      </div>
  );
}

export default Applicant;