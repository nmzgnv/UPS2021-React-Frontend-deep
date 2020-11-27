import styles from './TaskListScreen.module.scss';
import TaskCounter from '../Components/TaskCounter';
import TaskListItem from '../Components/TaskListItem';
import Task from '../Task';
import uuid from 'react-uuid'
import { PlainList } from 'flatlist-react';
import PlusIcon from '../Images/+.svg';
import NewTaskItem from '../Components/NewTaskItem';
import history from '../history';
import { useState } from 'react';
import { useLocation } from "react-router-dom";

var isTaskLoaded = false;

const TaskListScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const [tasks, setTasks] = useState(() => [
    new Task(uuid(), 'Do a workout', new Date(2020, 1)),
    new Task(uuid(), 'Study english', new Date(2020, 6, 30)),
    new Task(uuid(), 'Get into Jingu command', new Date(2021, 7, 5)),
  ]);

  const addTask = (text = 'hello') => {
    if (text.length > 0) {
      setTasks(tasks =>
        tasks.concat(new Task(uuid(), text, new Date()))
      );
    };
  }

  const getTasksFromApi = () => {
    setLoading(true);
    const tasksNum = 20;
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        var slicedJson = json.slice(0, tasksNum)
        slicedJson.forEach(task => {
          addTask(task.title);
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  console.log(location.state);

  const Redirect = () => {
    history.push({
      pathname: '/new-task',
      state: {}
    });
  }

  const renderItem = (item, id) => {
    return (
      <TaskListItem key={item.id} header={item.name} date={item.date} isLeftSide={id % 2 === 0}></TaskListItem>
    );
  }

  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <h3>Tasks</h3>
        <TaskCounter num='10'></TaskCounter>
        <div className={styles["list-container"]}>
          <PlainList
            list={tasks}
            renderItem={renderItem}
            renderWhenEmpty={() => <div>Add new tasks.</div>}
            renderOnScroll={true} />
          <NewTaskItem redirect={getTasksFromApi} />
        </div>
      </div>
      <button className={styles["circle-button"]} onClick={Redirect}>
        <img src={PlusIcon} alt="icon"></img>
      </button>
    </div>
  );
}

export default TaskListScreen;
