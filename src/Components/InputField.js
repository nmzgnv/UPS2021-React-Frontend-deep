import './InputField.scss';

const InputField = (props) => {
    return (
        <form>
            <h4>{props.label}</h4>
            <input type={props.password ? 'password' : 'text'} className="input-field"
                placeholder={"Enter " + props.label + "..."}></input>
        </form>
    );
}

export default InputField;