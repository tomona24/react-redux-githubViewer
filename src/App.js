import React from 'react';
import './App.css';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Toppage from './components/pages/Toppage';
import Header from './components/organisms/Header';

Modal.setAppElement('#root');

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Toppage />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
