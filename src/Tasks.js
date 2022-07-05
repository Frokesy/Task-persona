import React,{ useState } from 'react'
import Card from './components/Card'

const Tasks = ({task}) => {
  return (
    <div className="pt-[2vh]">
      <div className="flex flex-col">
        <Card>
            <button className="bg-teal-600 font-mono text-white text-[10px] px-4 py-1 rounded-md">
            {task.title}
            </button>
            <p className="w-[80vw] mx-auto text-[12px] text-slate-400 pt-2 font-serif">{task.description}</p>
            <span className="flex justify-end px-6 italic font-light text-slate-400 text-[11px]">Status: {task.status}</span>
        </Card>
      </div>
    </div>
  )
}

export default Tasks
