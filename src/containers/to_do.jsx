import React, { Component } from "react";
import AddTask from "../containers/add_task";
import TaskList from "../containers/task_list.jsx";

class ToDo extends Component {
    render() {
        return (
            <div>
                <div className="bg-image" />
                <div id="app">
                    <div className="container">
                        <div className="row header">
                            <div className="col col-md-3 relative">
                                <div className="user flex">
                                    <div className="user--image">
                                        <img src="images/jyn.jpg" />
                                    </div>
                                    <div className="user--name">
                                        Jyn Erso
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-9">
                                <h1>Your Tasks</h1>
                            </div>
                        </div>
                        <div>
                            <AddTask />
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDo;
