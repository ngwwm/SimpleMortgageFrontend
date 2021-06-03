import React from 'react';

const Products = (props) => {

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
          {props.products.map(p =>
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

  //useEffect(props.onSearch, []);

  return (    
    <div>
      <h2 id="tabelLabel" >Mortgage Products</h2>
      <p>The available products will be listed below.</p>
      {renderProudctsTable()}
    </div>
  )  
}

export default Products;