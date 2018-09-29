import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layouts/Navbar';

export class Pos extends Component {
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
                New Session
              </Link>
            </div>
            <div className="col-md-12">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Session ID</th>
                    <th>Created By</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>KmasdlKdnsAjKSmajk</td>
                    <td>John Doe</td>
                    <td>24/09/2018</td>
                    <td>
                      <Link to="/pos/sessionID" className="btn btn-success">
                        Open Session
                      </Link>
                      {/* <button className="btn btn-light" disabled>
                        Session Close
                      </button> */}
                    </td>
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

export default Pos;
