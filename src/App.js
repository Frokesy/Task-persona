import { useState } from 'react';
import Navbar from './components/Navbar';
import NewTask from './components/NewTask';
import TaskData from './data/TaskData';
import TaskList from './data/TaskList';
function App() {
    const [task, setTask] = useState(TaskData)
    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
    setClicked(true)
}
    const addTask = (NewTask) => {
        setTask([NewTask, ...task])
    }
    return ( 
        <div>
        <Navbar header="Task Persona" />

            {clicked ? (
                <NewTask addTask={addTask}/>
            ) : (
                <div></div>
                    )}
            <TaskList tasks={task} handleClick={handleClick} />
     </div>
    )
}

export default App;