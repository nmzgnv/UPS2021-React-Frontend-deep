import './NewTaskItem.scss';
import CrossImage from '../Images/strong +.svg';


const NewTaskItem = (props) => {
    return (
        <li className='new-task-item'>
            <a onClick={props.redirect}>
                <img src={CrossImage}></img>
                <p>Create new task</p>
            </a>
        </li>
    );
}

export default NewTaskItem;
