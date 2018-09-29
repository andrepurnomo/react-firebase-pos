import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Dashboard from './components/pages/dashboard/Dashboard';
import DetailOrder from './components/pages/dashboard/DetailOrder';

import Products from './components/pages/product/Products';
import AddProduct from './components/pages/product/AddProduct';
import DetailProduct from './components/pages/product/DetailProduct';

import Pos from './components/pages/pos/Pos';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/orders" />} />
          <Route exact path="/orders" component={Dashboard} />
          <Route exact path="/orders/:id" component={DetailOrder} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route exact path="/products/:id" component={DetailProduct} />
          <Route exact path="/pos" component={Pos} />
        </Switch>
      </Router>
    );
  }
}

export default App;
