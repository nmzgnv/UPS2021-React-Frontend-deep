import './App.scss';
import InputField from './Components/InputField'
import LoginImage from './Images/LoginImage.png'

function App() {
  return (
    <div className="App">
      <div className="container">
          <h3>Welcome to a todo app</h3>
          <InputField label="Email"></InputField>
          <InputField label="Password"></InputField>
          <button className="primary-button">Login</button>
      </div>
      <img className="media" src={LoginImage} alt='Image'></img>
    </div>
  );
}

export default App;
