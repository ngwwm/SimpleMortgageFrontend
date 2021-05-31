import React, { Component } from 'react';
import { Applicant } from './Applicant/Applicant';
import { Product } from './Product/Product';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Applicant />
        <Product />
      </div>
    );
  }
}
