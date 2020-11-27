import styles from './LoginScreen.module.scss';
import InputField from '../Components/InputField'
import LoginImage from '../Images/LoginImage.png'
import { useHistory } from 'react-router-dom';
import history from '../history';

function LoginScreen() {
  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <h3>Welcome to a todo app</h3>
        <InputField label="Email"></InputField>
        <InputField label="Password" password={true}></InputField>
        <button className={styles["primary-button"]} onClick={() => history.push("/tasks")}>Login</button>
      </div>
      <img className={styles["media"]} src={LoginImage} alt='Image'></img>
    </div>
  );
}

export default LoginScreen;
