import React from "react";
import './ToDoList.css';

function ToDoList () {
    return (
        <div className="container">
            <h1>To-do List</h1>
            <form className="inputs-box" action="post">
                <input className="text-input" type="text" placeholder="Type your task here"/>
                <input className="add-btn" type="button" value="Add" />
            </form>
            <div className="list">
                <div className="item">
                    <span>Example of task</span>
                    <a className="delete">Delete</a>
                </div>
                <div className="dashed-item">
                    <span>Example of task</span>
                    <a className="delete">Delete</a>
                </div>
            </div>
            <button className="del-btn">Delete All</button>
        </div>
    )
}

export default ToDoList