import React, { Component } from 'react';
import './App.scss';
import Head from './component/Head';
import Content from './component/Content';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        <Content />
      </main>
    );
  }
}

export default App;
