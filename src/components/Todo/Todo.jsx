import React, { useState } from 'react';

import { TodoContainer, TodoContainerHeader, TodoContainerContent, TodoContainerFooter } from './TodoStyles';

import InputTodoAdd from '../InputTodoAdd/InputTodoAdd';
import TodoList from '../TodoList/TodoList';

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
    <TodoContainer>
      <TodoContainerHeader>
        <h3>Title</h3>
        <span>10/03/2024</span>
        <InputTodoAdd addItemToTodoList={addItemToTodoList} onClickClearList={onClickClearList}/>
      </TodoContainerHeader>
      <TodoContainerContent>
        
        <TodoList  todoList={todoList} onClickItemTodoListToggleDone={onClickItemTodoListToggleDone} deleteItemFromTodoList={deleteItemFromTodoList} editItemTitleFromTodoList={editItemTitleFromTodoList}/>
      </TodoContainerContent>
      <TodoContainerFooter />
    </TodoContainer>
  );
}

export default Todo;
