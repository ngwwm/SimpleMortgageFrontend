import React, { useState, useEffect } from 'react';

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const renderProudctsTable = () => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Lender</th>
            <th>Interest Rate</th>
            <th>Fixed/Variable</th>
            <th>Loan-to-value</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p =>
            <tr key={p.id}>
              <td>{p.lender}</td>
              <td>{p.interestRate}</td>
              <td>{p.interestTerm}</td>
              <td>{p.ltv}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };

  const populateMatchedProducts = () => {
    const url = process.env.REACT_APP_SIMPLEMORTGAGE_API_SERVER + '/products';    
    fetch(url)
      .then(response => response.json())
      .then(function (data) {                     
        setProducts(data);
      })
      .catch((error) => {
        console.error('Érror:', error);
      });
  }

  useEffect(populateMatchedProducts, []);

  return (    
    <div>
      <h1 id="tabelLabel" >Products</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {renderProudctsTable()}
      <button className="btn btn-primary" onClick={populateMatchedProducts}>Search</button>
    </div>
  )  
}

export default Products;