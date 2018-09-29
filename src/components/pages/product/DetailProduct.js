import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layouts/Navbar';

export class DetailProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/products" className="btn btn-light">
                <i class="fas fa-arrow-left" /> Back to Product List
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Detail Product</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        name="price"
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        disabled
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailProduct;
