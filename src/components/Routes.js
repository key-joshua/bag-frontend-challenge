import ReactGa from 'react-ga';
import React, { useEffect } from 'react';
import '../App.scss';
import { Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Landing from './landing/landing';
import Details from './details/Details';

// component which wrapper all app routes
const Routes = () => {
  useEffect(() => {
    ReactGa.initialize('UA-163119480-1');
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/details/:CountryName" component={Details} />
      </Switch>
    </Layout>
  );
};

export default Routes;
