import { FaTimes } from 'react-icons/fa'


const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}> 
            <h3> {task.text} <FaTimes color='red' onClick={()=>onDelete(task.id)} /></h3>
            <p>  {task.day} </p> 
           Reminder :  <span > { task.reminder ? 'On': 'Off' } </span>
        </div>
    )
}

export default Task
