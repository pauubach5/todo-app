import '../styles/Item.css'
import { AiFillCloseCircle } from "react-icons/ai"
//https://digitalsynopsis.com/design/flat-color-palettes/

export default function Item ({id, text, completed, deleteTask, completedTask}) {

    return (
        <div className={
            completed ?  "item-completed" : "item-container"
        }>
            <div className='item-text' onClick={() => completedTask(id)}>{text}</div>
            <div className="item-icon" onClick={() => deleteTask(id)}><AiFillCloseCircle /></div>
        </div>
    )
}