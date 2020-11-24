import './TaskCounter.scss';

const TaskCounter = (props) => {
    return (
        <div className='task-counter'>
            <p>{props.num}</p>
        </div>
    );
}

export default TaskCounter;
