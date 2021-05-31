import React, { Component } from 'react';

export class Product extends Component {
  static displayName = Product.name;

  render () {
    return (
      <div>
        <h2>Products</h2>
      </div>
    );
  }
}