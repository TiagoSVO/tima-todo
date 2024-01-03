import React, { useState } from 'react';

import InputTodoAdd from './InputTodoAdd';
import TodoList from './TodoList';

const Todo = () => {

  const clearList = () => {
    localStorage.removeItem('initialList')
    return []
  }

  const getList = () => {
    return JSON.parse(localStorage.getItem('initialList'));
  }

  const saveList = (ttList) => {
    localStorage.setItem('initialList', JSON.stringify(ttList));
    return ttList
  }

  const initialList = ( getList() || [])

  const [todoList, setTodoList] = useState(initialList)

  const addItemToTodoList = (item) => {
    setTodoList(saveList([...todoList, item]))
  }

  const deleteItemFromTodoList = (item) => {
    setTodoList(saveList((todoList.filter((itemTodo) => itemTodo.id !== item.id))))
  }

  const toggleClassName = (tagNode, nameClass) => {
    if(tagNode) {
      [...tagNode.classList].indexOf(nameClass) >= 0 ? tagNode.classList.remove(nameClass) : tagNode.classList.add(nameClass)
    }
  }

  const updateItemInList = (item, key, value) => {

    setTodoList(
      saveList(todoList.map((itemTodo) => {
          let newItem = {...itemTodo}
          newItem[key] = value
          return (itemTodo.id === item.id ? newItem : itemTodo)
        }
      ))
    )
  }

  const onClickItemTodoListToggleDone = (item, e) => {
    const tagItem = e.target;
    const tagLine = tagItem.closest("li");
    updateItemInList(item, 'done', !item.done)
    toggleClassName(tagLine, 'done');
  }

  const onClickClearList = () => {
    setTodoList(clearList());
  }

  const editItemTitleFromTodoList = (item, newTitle) => {
    console.log('clicado: onClickButtonTodoEdit')
    updateItemInList(item, 'title', newTitle)
  }

  return (
    <div className="tt-wrap">
      <header className="tt-header">
        <h1 className="tt-h1">Tima ToDo</h1>
      </header>
      <main className="tt-main">
        <InputTodoAdd addItemToTodoList={addItemToTodoList} onClickClearList={onClickClearList}/>
        <TodoList  todoList={todoList} onClickItemTodoListToggleDone={onClickItemTodoListToggleDone} deleteItemFromTodoList={deleteItemFromTodoList} editItemTitleFromTodoList={editItemTitleFromTodoList}/>
      </main>
      <footer className="tt-footer">
        <span>Developed by tiago.svo.dev</span>
      </footer>
    </div>
  );
}

export default Todo;
