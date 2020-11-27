import WideInputField from '../Components/WideInputField'
import Cross from '../Images/cross.svg'
import styles from './NewTaskScreen.module.scss';
import React, { useState } from 'react';
import history from '../history';
import { Link } from 'react-router-dom';

const NewTaskScreen = (props) => {
  const [taskText, setTaskText] = useState('');

  const Redirect = (text = ' ') => {
    history.push({
      pathname: '/tasks',
      state: { text: text }
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <button className={styles['close-button']} onClick={() => Redirect(taskText)}>
          <img src={Cross} alt='cross'></img>
        </button>
        <h3>New Task</h3>
        <WideInputField label="Task name"></WideInputField>
        <button className={styles['primary-button']} onClick={() => Redirect(taskText)}>
          Create
          </button>
      </div>
    </div>
  );
}

export default NewTaskScreen;
