import {React, useState} from "react"
import '../styles/Form.css'
import {v4 as uuidv4 } from 'uuid';

export default function Form (props) {
    
    const [inputText, setInputText] = useState('');
    
    
    function handleChange(e) {
        setInputText(e.target.value)
    }

    function manageSending(e) {
        e.preventDefault()
        if (inputText.length > 0) {
            const newTask = {
                id: uuidv4(),
                text: inputText,
                completed: false
            }
            props.onSubmit(newTask)  
        }
    }
    
    return (
        <form className='form-container' onSubmit={manageSending}>
            <input className='text-container' type="text" onChange={handleChange} />
            <input className='button-form' type="submit" value="Add Task" />
        </form>
        
    )
}