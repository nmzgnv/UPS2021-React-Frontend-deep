import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginScreen from './LoginScreen/LoginScreen';
import NewTaskScreen from './NewTaskScreen/NewTaskScreen';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NewTaskScreen />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
