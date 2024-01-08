import React, { useState } from 'react';
import  { SectionInputAdd } from './InputTodoAddStyles'

const InputTodoAdd = (props) => {
  const initialInputTodoAdd = ''

  const [inputTodoAdd, setInputTodoAdd] = useState(initialInputTodoAdd)

  const addItemToTodoList = props.addItemToTodoList
  const onClickClearList = props.onClickClearList

  const onChangeInputTodoAdd = (event) => {
    setInputTodoAdd(event.target.value)
  }

  const clearInputTodoAdd = () => {
    setInputTodoAdd(initialInputTodoAdd)
  }

  const onEnterInputTodoAdd = (event) => {
    if(event.keyCode === 13 && inputTodoAdd !== '') {
      addItemToTodoList({id: Date.now(), title: inputTodoAdd, done: false})
      clearInputTodoAdd()
    } else if (event.keyCode === 27) {
      clearInputTodoAdd()
    }
  }

  const onClickButtonTodoAdd = (event) => {
    if(inputTodoAdd !== '') {
      addItemToTodoList({id: Date.now(), title: inputTodoAdd, done: false})
      clearInputTodoAdd()
    }
  }

  return(
    <SectionInputAdd className="tt-input-todo">
      <div className="tt-wrap-input-button-add">
        <input value={inputTodoAdd} onKeyDown={onEnterInputTodoAdd} onChange={onChangeInputTodoAdd} placeholder="New Task..."/>
        <button onClick={onClickButtonTodoAdd}>+</button>
      </div>
      <button className="tt-clear-button" onClick={onClickClearList}>Clear ToDo</button>
    </SectionInputAdd>
  )
}

export default InputTodoAdd;
