import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskListScreen from './TaskListScreen/TaskListScreen';
// import LoginScreen from './LoginScreen/LoginScreen';
// import NewTaskScreen from './NewTaskScreen/NewTaskScreen';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TaskListScreen />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
