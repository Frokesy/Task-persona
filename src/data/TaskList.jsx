import React from 'react'
import Tasks from '../Tasks'
import { FaPlus } from 'react-icons/fa'
import {useState} from 'react'
const TaskList = ({tasks, handleClick}) => {
  return (
    <div className="text-slate-500 pt-[7vh] w-[90vw] mx-auto text-[15px]">
        <div className="flex justify-between">
        <h2>Active Tasks <span className="text-teal-400">({tasks.length})</span></h2>
        <div 
        className="flex bg-teal-600 px-3 py-2 text-white space-x-1 rounded-md text-[9px] justify-end cursor-pointer"
        onClick={handleClick}
        >
        <FaPlus
        size='1.2em'
        />
        <h2>New Task</h2>
        </div>
        </div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
            <Tasks key={task.id} task={task} />
            )) ) : (
                <p>No tasks to display</p>
            )}
    </div>
    )
}

export default TaskList
