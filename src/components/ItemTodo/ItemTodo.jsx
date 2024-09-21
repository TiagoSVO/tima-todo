import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck , FiSquare, FiCheckSquare } from "react-icons/fi";
import { Container, ButtonsGroup, Button, LabelItem } from './ItemTodoStyles'

const InputTodoEdit = ({item, editItemTitleFromTodoList, onClickItemTodoListToggleDone, deleteItemFromTodoList}) => {
  const [inputTodoEdit, setInputTodoEdit] = useState(item.title)
  const [onEdit, setOnEdit] = useState(false)

  const toggleInputEditAndSpan = () => {
    setInputTodoEdit(item.title)
    setOnEdit(!onEdit)
  }

  const onChangeInputTodoEdit = (event) => {
    setInputTodoEdit(event.target.value)
  }

  const onClickButtonTodoEdit = (item) => {
    editItemTitleFromTodoList(item, inputTodoEdit)
    setOnEdit(!onEdit)
  }

  return (
    <Container className={item.done ? 'done' : ''}>
      {onEdit ?
        <LabelItem className="tt-wrap-input-button-edit">
          <input type="text" value={inputTodoEdit} onChange={(e) => onChangeInputTodoEdit(e)}/>
          <button className="tt-btn-ok-edit"
                  type="button" onClick={(e) => onClickButtonTodoEdit(item, e)}>
                  <FiCheck size={20} />
          </button>
        </LabelItem>
        :
        <LabelItem onClick={(e) => {onClickItemTodoListToggleDone(item, e)}}>
          {item.done ? <FiCheckSquare size={20}/> : <FiSquare size={20}/>}
          <label>
              {item.title}
          </label>
        </LabelItem>
      }
      <ButtonsGroup>
        <Button styleType='Edit' className={onEdit ? 'editing' : ''} onClick={() => toggleInputEditAndSpan()}>
            {onEdit ? 'Cancel' : <FiEdit2 size={20} />}
        </Button>
        <Button styleType='Delete' onClick={() => deleteItemFromTodoList(item)}>
            <FiTrash2 size={20} />
        </Button>
      </ButtonsGroup>
    </Container>
  )
}

export default InputTodoEdit;
