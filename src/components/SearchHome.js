import React, { useState } from 'react';
import Applicant from './Applicant/Applicant';
import Products from './Products/Products';
import Message from './Message/Message';
import { parseISO, format } from 'date-fns'

const SearchHome = (props) => {
  const [ applicant, setApplicant] = useState({    
    "id": 0,
    "firstName": "",
    "lastName": "",
    "dob": "",
    "email": ""          
  }); 

  const [ loan, setLoan ] = useState({    
    "propertyValue": 100000,
    "depositAmount": 50000
  }); 

  const [products, setProducts] = useState([]);
  
  const [message, setMessage] = useState();

  /* Fields: Mortgage Details */
  const loanFieldsChangeHandler = evt => {
    const value = evt.target.value;
    setLoan({
      ...loan,
      [evt.target.name]: value
    });
  };

  /* Input Fields: Applicant Details */
  const applicantFieldsChangeHandler = evt => {
    const value = evt.target.value;    
    setApplicant({
      ...applicant,
      [evt.target.name]: value
    });
  };

  /* Start Over Button*/
  const applicantStartOverHandler = () => {
    setApplicant({
      ...applicant,
      id: 0
    });    
    setProducts([]);
  };

  /* 1) That accepts an applicant details – first name, last name, date of birth and e-mail, and returns a unique ID */
  const selectInsertApplicantHandler = () => {
    const url = process.env.REACT_APP_BACKEND_API_SERVER + '/applicants';
    const options = {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        dob: applicant.dob,
        email: applicant.email
      })
    };
    console.log(options.body);
    fetch(url, options)
      .then(response => response.json())
      .then(function (data) {
        console.log(data);
        if (data.errors) {
          var err = JSON.stringify(data.errors);
          setMessage(err);
          console.error('Error:', err);          
        } else {          
          setMessage();
		      setApplicant(() => {          
            return Object.assign({}, {id: data.id, firstName: data.firstName, dob: format(parseISO(data.dob),'yyyy-MM-dd'), lastName: data.lastName, email: data.email})
          })
        }
      })
      .catch((error) => {
        setMessage(error.toString());
        console.error('Error:', error);
      });
  }

  /* 2)	That takes details of mortgage requirements – property value and deposit amount – along with a user ID, and returns a list of available products. */
  const searchMortgageProductHandler = () => {
    const url = process.env.REACT_APP_BACKEND_API_SERVER + '/applicants/' + applicant.id + '/products';
    const params = {propertyVal: loan.propertyValue, depositAmt: loan.depositAmount}
   
    fetch(url + '?' + new URLSearchParams(params).toString())
      .then(response => response.json())
      .then(function (data) {
        console.log(data);
        if (data.errors) {
          var err = JSON.stringify(data.errors);
          setMessage(err);
          setProducts([]);
          console.error('Error:', err);
        } else {          
          setMessage();
          setProducts(data);
        }
      })
      .catch((error) => {
        setMessage(error.toString());
        setProducts([]);
      });
  }


  return ( 
      <div>
        <Applicant applicant={applicant} loan={loan} 
            onLoanChange={loanFieldsChangeHandler} 
            onApplicantChange={applicantFieldsChangeHandler} 
            onApplicantDatePickerChange={applicantFieldsChangeHandler} 
            onNext={selectInsertApplicantHandler} 
            onSearch={searchMortgageProductHandler} 
            onStartOver={applicantStartOverHandler} />
        <Message mesg={message} />
        <Products applicant={applicant} loan={loan} products={products} onSearch={searchMortgageProductHandler} />
      </div>
    )
}

export default SearchHome;