import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTasks } from '../actions/index';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = { tasks: [{task: "Destroy the empire"},
                               {task: "Get the Death Star plans"}],
                       checked: false };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    componentWillMount() {
        this.props.fetchTasks(this.state.tasks);
    }

    handleChange(event) {
        this.setState({value: event.target.value});    
    }

    handleCheckboxChange(event) {
        this.setState({checked: (this.state.checked) ? false : true});
    }

    onFormSubmit(event) {
        event.preventDefault();

        if (this.state.value != null || "") {
            if (this.state.checked) {
                this.state.tasks.unshift({task: this.state.value});
            } else {
                this.state.tasks.push({task: this.state.value});
            }
            this.props.fetchTasks(this.state.tasks);
        }
        
        this.setState({value: null, checked: false});
        let checkbox = document.getElementById("important");
        checkbox.checked = false;
    }

    render() {
        let checked = false;
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter Task"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <span className="input-group-btn">
                    <span className="important-checkbox">
                        <input type="checkbox" value="1" id="important" onChange={this.handleCheckboxChange}/>
                             Important
                    </span>
                    <button type="submit" className="btn btn-secondary">
                        Add Task
                     </button>
                 </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);