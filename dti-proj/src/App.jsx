import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "./components/TopMenu"
import ProductList from "./components/ProductList"
import Product from "./components/Product"
class App extends React.Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductList/>
            </Route>
            <Route exact path="/edit/:id"> 
              <Product/>
            </Route>
            <Route exact path="/create">
              <Product/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;