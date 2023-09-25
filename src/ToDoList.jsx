import React from "react";
import './ToDoList.css';

function ToDoList () {
    return (
        <div className="container">
            <h1>To-do List</h1>
            <form action="post">
                <div className="inputs-box">
                    <input className="input-text" type="text" placeholder="Type your task here"/>
                    <input className="add" type="button" value="Add" />
                </div>
            </form>
            <div className="list">
                <div className="item">
                    <span>Example of task</span>
                    <button>Delete</button>
                </div>
                <div className="dashed-item">
                    <span>Example of task</span>
                    <button>Delete</button>
                    <button>Undone</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList