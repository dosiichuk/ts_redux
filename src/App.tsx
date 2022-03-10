import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2 className="App-header">Search for a Package</h2>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
