import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./Input.css"
import {saveTodo} from "../features/TodoSlice"

const Input = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {

        console.log(`Adding ${input}`)

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))

        setInput("");
    }

    return (
        <div className="input">
            <form className="form">
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button disabled={!input} onClick={addTodo}>Add</button>
            </form>
        </div>
    )
}

export default Input
