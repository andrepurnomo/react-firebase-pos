import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Navbar from '../../layouts/Navbar';

export class Dashboard extends Component {
  onClick = id => {
    const { history } = this.props;
    history.push(`/orders/${id}`);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-muted">Order List</h3>
            </div>
            <div className="col-md-6" />
            <div className="col-md-12">
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>User ID</th>
                    <th>Total</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{ cursor: 'pointer' }}
                    onClick={this.onClick.bind(this, '123')}
                  >
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Rp. 5000</td>
                    <td>28/09/2018</td>
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

export default Dashboard;
