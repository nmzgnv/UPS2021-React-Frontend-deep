import './TaskCounter.scss';

const TaskCounter = (props) => {
    return (
        <div className='task-counter'>
            <p className='helper-text'>Completed tasks:&nbsp;</p>
            <p>{props.num}</p>
        </div>
    );
}

export default TaskCounter;
