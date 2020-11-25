import './NewTaskItem.scss';
import CrossImage from '../Images/strong +.svg';


const NewTaskItem = () => {
    return (
        <li className='new-task-item'>
            <img src={CrossImage}></img>
            <p>Create new task</p>
            
        </li>
    );
}

export default NewTaskItem;
