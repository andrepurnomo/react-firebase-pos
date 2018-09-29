import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layouts/Navbar';

export class Products extends Component {
  onClick = id => {
    const { history } = this.props;
    history.push(`/products/${id}`);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-muted">Product List</h3>
            </div>
            <div className="col-md-6 text-right">
              <Link to="/products/add" className="btn btn-success">
                Add Product
              </Link>
            </div>
            <div className="col-md-12">
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{ cursor: 'pointer' }}
                    onClick={this.onClick.bind(this, '123')}
                  >
                    <td>1</td>
                    <td>Boni Oranges</td>
                    <td>Rp. 50.0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
