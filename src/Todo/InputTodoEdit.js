import React, { useState } from 'react';
import { FaTrashAlt, FaEdit, FaCheck } from 'react-icons/fa';

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
    <>

      {onEdit ?
        <div className="tt-wrap-input-button-edit">
          <input type="text" value={inputTodoEdit} onChange={(e) => onChangeInputTodoEdit(e)}/>
          <button className="tt-btn-ok-edit"
                  type="button" onClick={(e) => onClickButtonTodoEdit(item, e)}>
                  <FaCheck size={24} />
          </button>
        </div>
        :
        <div>
          <span
            onClick={(e) => {onClickItemTodoListToggleDone(item, e)}}>
              {item.title}
          </span>
        </div>
      }
      <div className="tt-wrap-item-actions">
        <button className={onEdit ? "tt-btn tt-btn-default tt-button-edit" : '' }
          onClick={() => toggleInputEditAndSpan()}>
            {onEdit ? 'Cancel' : <FaEdit size={24} />}
        </button>
        <button
          onClick={() => deleteItemFromTodoList(item)}>
            <FaTrashAlt size={24} />
        </button>
      </div>
    </>
  )
}

export default InputTodoEdit;
