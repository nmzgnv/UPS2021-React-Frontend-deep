import './TaskListItem.scss';


function formatDate(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getDate() + ' ' + months[date.getMonth() % 12] + ' ' + date.getFullYear();
}


const TaskListItem = (props) => {
    return (
        <li className={["task-list-item", props.isLeftSide? 'left' : 'right'].join(" ")}>
            <h4>{props.header}</h4>
            <p>{formatDate(props.date)}</p>
            <button>Done</button>
        </li>
    );
}

export default TaskListItem;
