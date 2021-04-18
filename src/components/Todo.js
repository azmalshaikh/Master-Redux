import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "./Todo.css";
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/TodoSlice';

function Todo({item, done, id}) {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todo">

            <Checkbox 
                checked={done} 
                color="primary" 
                onChange={handleCheck} 
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            <p className={done && 'todo--done'}>{item}</p>
        </div>
    )
}

export default Todo
