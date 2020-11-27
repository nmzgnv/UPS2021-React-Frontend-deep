import React from 'react';
import NewTaskScreen from './NewTaskScreen/NewTaskScreen';
import TaskListScreen from './TaskListScreen/TaskListScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

const App = () => (
    <Router history={history}>
        <Switch>
            <Route path="/tasks">
                <TaskListScreen></TaskListScreen>
            </Route>
            <Route exact path="/new-task" title='New task'>
                <NewTaskScreen></NewTaskScreen>
            </Route>
            <Route path="/">
                <LoginScreen></LoginScreen>
            </Route>
        </Switch>
    </Router>
);

export default App;