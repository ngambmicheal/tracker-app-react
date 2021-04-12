import React from 'react';
import Header from './components/Header';

import Tasks from './components/Tasks';
import { useState } from 'react';


// function App() {
//     const name = 'Brad';
//     const x = true;
//     return ( 
//         <div className='container'>
//             <Header />
//         </div>
//     );
// }

function App(){
    const [tasks, setTasks] = useState([
        {
            id: 1, 
            text: "Today",
            day: 'Today', 
            reminder: true
        },
        {
            id: 2, 
            text: "Tomorrow",
            day: 'Tomorrow', 
            reminder: true
        }
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id ===id ? {...task, reminder:!task.reminder} : task))
    }

        return (
             <div className='container'>
                <Header   />
                {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('NO Task to show' ) }

            </div>
        )
}



export default App;