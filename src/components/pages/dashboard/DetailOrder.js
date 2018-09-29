import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layouts/Navbar';

export class DetailOrder extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/" className="btn btn-light">
                <i class="fas fa-arrow-left" /> Back to Order List
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Order Detail</div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name">Order ID</label>
                    <input
                      name="id"
                      type="text"
                      className="form-control"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user">User ID</label>
                    <input
                      name="user"
                      type="text"
                      className="form-control"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Total</label>
                    <input
                      name="total"
                      type="number"
                      className="form-control"
                      disabled
                    />
                  </div>
                  <label>Product List</label>
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      <td>1</td>
                      <td>Boni Oranges</td>
                      <td>Rp. 2000</td>
                      <td>5</td>
                      <td>Rp. 10.000</td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailOrder;
