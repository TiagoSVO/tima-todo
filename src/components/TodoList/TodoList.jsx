import React from 'react';
import ItemTodo from '../ItemTodo/ItemTodo'
import { List } from './TodoListStyles';

const TodoList = ({todoList, onClickItemTodoListToggleDone, deleteItemFromTodoList, editItemTitleFromTodoList}) => {
  return (
    <List >
      {
        todoList.map((item) => (
          <ItemTodo key={item.id} item={item}
          editItemTitleFromTodoList={editItemTitleFromTodoList}
          onClickItemTodoListToggleDone={onClickItemTodoListToggleDone}
          deleteItemFromTodoList={deleteItemFromTodoList}/>
        ))
      }
    </List>
  )
}

export default TodoList;
