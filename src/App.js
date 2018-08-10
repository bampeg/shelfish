import React, { Component } from 'react';

import Header from './component/Header/Header';
import Form from './component/Form/Form';
import Dashboard from './component/Dashboard/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  };
};

export default App;
