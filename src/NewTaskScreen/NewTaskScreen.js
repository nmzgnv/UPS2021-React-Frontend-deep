import WideInputField from '../Components/WideInputField'
import Cross from '../Images/cross.svg'
import styles from './NewTaskScreen.scss';
import React from 'react';

class NewTaskScreen extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <button className='close-button'>
            <img src={Cross} alt='cross'></img>
          </button>
          <h3>New Task</h3>
          <WideInputField label="Task name"></WideInputField>
          <button className='primary-button'>Create</button>
        </div>
      </div>
    );
  }
}

export default NewTaskScreen;
