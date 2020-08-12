import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ADRESS} from "./env"
import TopMenu from "./components/TopMenu";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

class App extends React.Component {
  render() {
    return (
        <Router >
        <TopMenu />
          <Switch>
            <Route exact path={ADRESS.ROOT}>
              <ProductList/>
            </Route>
            <Route exact path={ADRESS.EDIT + '/:id'}> 
              <Product/>
            </Route>
            <Route exact path={ADRESS.CREATE}>
              <Product/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;