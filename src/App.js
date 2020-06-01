import React from 'react';
import './App.css';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import IssueContainer from './container/IssueContainer';
import store from './store';
import Header from './components/organisms/Header';

Modal.setAppElement('#root');

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <IssueContainer />
      </div>
    </Provider>
  );
}

export default App;
