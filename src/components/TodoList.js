import React, { useState } from 'react';
import InputTodoEdit from './InputTodoEdit'

const TodoList = ({todoList, onClickItemTodoListToggleDone, deleteItemFromTodoList, editItemTitleFromTodoList}) => {
  return (
    <ul className="tt-list">
      {
        todoList.map((item) => (
          <li key={item.id} className={item.done ? 'done' : ''}>
            <InputTodoEdit item={item}
            editItemTitleFromTodoList={editItemTitleFromTodoList}
            onClickItemTodoListToggleDone={onClickItemTodoListToggleDone}
            deleteItemFromTodoList={deleteItemFromTodoList}/>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList;
