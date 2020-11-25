import styles from './TaskListScreen.scss';
import TaskCounter from '../Components/TaskCounter';
import TaskListItem from '../Components/TaskListItem';
import Task from '../Task';
import uuid from 'react-uuid'
import {PlainList} from 'flatlist-react';
import PlusIcon from '../Images/+.svg';
import NewTaskItem from '../Components/NewTaskItem';

var items = [
  new Task(uuid(), 'Do a workout', new Date(2020, 1)),
  new Task(uuid(), 'Study english', new Date(2020, 6, 30)),
  new Task(uuid(), 'big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
  new Task(uuid(), 'Do a workout', new Date(2020, 1)),
  new Task(uuid(), 'Study english', new Date(2020, 6, 30)),
  new Task(uuid(), 'big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world-big-world', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
  new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
]

const renderItem = (item, id) => {
  return (
    <TaskListItem key={item.id} header={item.name} date={item.date} isLeftSide={id % 2 == 0}></TaskListItem>
  );
}

const TaskListScreen = () => {
  return (
    <div className="App">
      <div className="container">
        <h3>Tasks</h3>
        <TaskCounter num='10'></TaskCounter>
        <div className="list-container">
          <PlainList
            list={items}
            renderItem={renderItem}
            renderWhenEmpty={() => <div>Add new tasks.</div>}
            renderOnScroll/>
            <NewTaskItem/>
        </div>
      </div>
      <button className="circle-button">
        <img src={PlusIcon}></img>
      </button>
    </div>
  );
}

export default TaskListScreen;
