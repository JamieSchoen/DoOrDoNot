import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskList extends Component {
    onCheckBoxClick(event) {
        event.target.disabled = true;
        let parent = document.querySelector("[data-id='"+event.target.dataset.id+"']");
        parent.classList.add("disabled");
    };

    render() {
        const tasks = this.props.tasks[0] || [];

        return (
            <div className="task-list">
                {!tasks.length ? (
                    <span>No Tasks!</span>
                ) : (
                    tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <div className="to-do-list">
                                    <div className="to-do-item" data-id={index}>
                                        <label>
                                            <input type="checkbox" data-id={index} onClick={this.onCheckBoxClick}/>
                                                {task.task}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        );
    }
}

function mapStateToProps({ tasks }) {
    return { tasks };
}

export default connect(mapStateToProps)(TaskList);