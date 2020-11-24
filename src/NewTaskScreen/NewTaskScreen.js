import WideInputField from '../Components/WideInputField'
import Cross from '../Images/cross.svg'
import './NewTaskScreen.scss';

function NewTaskScreen() {
  return (
    <div className="App">
      <div className="container">
          <button className='close-button'>
            <img src={Cross} alt='cross'></img>
          </button>
          <h3>New Task</h3>
          <WideInputField label="Task name"></WideInputField>
          <button className="primary-button">Create</button>
      </div>
    </div>
  );
}

export default NewTaskScreen;
