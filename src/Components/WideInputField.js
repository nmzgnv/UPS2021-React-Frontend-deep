import React from 'react';
import './WideInputField.scss';

class WideInputField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.state = {
            value: '',
            rows: 3,
            minRows: 3,
            maxRows: 15,
        };
    }

    handleChange = (event) => {
        const textareaLineHeight = 15;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea 

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };

    render() {
        return (
            <form>
                <h4>{this.label}</h4>
                <textarea
                    placeholder={"Enter " + this.label + "..."}
                    rows={this.state.rows}
                    value={this.state.value}
                    className={'wide-input-field'}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default WideInputField;