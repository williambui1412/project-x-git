import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Common/Header';
import HomePage from './containers/HomePage';
import Footer from './components/Common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
 