import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CodeSetList } from './Codesetlist';
//import { CalcContainer } from './app.calculator';
import { CodeSetDetail, DetailContainer } from './Codesetdetail';

export default class CodeSetMain extends React.Component {

  componentDidMount() {
      console.log("CodeSetMain.componentDidMount")
  }

  render() {
      return <Router><div>
          <header>
              <img src="./images/books.gif" />
              <h1>Otsikko TÄSSÄ</h1>  
          </header>
          <nav>
              <Link to="/">CodeSets  </Link>
              <Link to="/calc">Calculator</Link>
          </nav>
          <main>
              <Switch>
                  <Route path="/calc" component={CodeSetList} />
                  <Route path="/book/:id" component={DetailContainer} />       
                  <Route path="/" component={CodeSetList} /> 
              </Switch>
          </main>
          <footer>Copyright firma oy ab</footer>
      </div></Router>
  }
}

