import React, { useEffect, useState } from "react";
import './ToDoList.css';
import WellDone from './assets/well-done.svg';
import DoIt from './assets/doit.svg';

function ToDoList () {

    const listStorage = localStorage.getItem('List');


    const [newItem, setNewItem] = useState ("");
    const [list, setList] = useState (listStorage ? JSON.parse(listStorage) : []);

    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(list));
    }, [list])

    function addItem(form) {
        form.preventDefault();
        if (!newItem) {
            return;
        }
        setList([...list, { text: newItem, isCompleted: false }]);
        setNewItem("");
        document.getElementById('entry-input').focus();
    }

    function clicked(index) {
        const auxList = [...lista];
        auxList[index].isCompleted = !auxList[index].isCompleted;
        setList(auxList);
    }

    function deleter(index) {
        const auxList = [...list];
        auxList.splice(index, 1);
        setList(auxList);
    }

    function deleteAll() {
        setList([]);
    }

    return (
        <div className="container">
            <h1>To-do List</h1>
            <form onSubmit={addItem} className="inputs-box">
                <input 
                    id="entry-input"
                    type="text" className="text-input"  
                    value={newItem} 
                    onChange={(event) => { setNewItem(event.target.value)}} 
                    placeholder="Type your task here"
                />
                <input className="add-btn" type="submit" value="Add" />
            </form>
            <div className="list">
                { 
                    list.length <1
                     ? 
                     <img src={DoIt} className="do-it" /> 
                     : 
                     list.map((item, index) => (
                        <div 
                            key={index} 
                            className={item.isCompleted ? "line-through-item" : "item"}
                        >
                            <span onClick={() => { clicked(index)}}>{item.text}</span>
                            <a onClick={() => { deleter(index) }} className="delete">Delete</a>
                        </div>
                    ))
                }
                {
                    list.length > 0 &&
                    <button onClick={() => { deletaTudo() }} className="del-btn">Delete All</button>
                }
            </div>
        </div>
    )
}

export default ToDoList