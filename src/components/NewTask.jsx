import React from 'react'
import Card from './Card'
import { useState } from 'react'

const NewTask = ({addTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setisDisabled] = useState(true)

    const handleDescChange = (e) => {
        setDescription(e.target.value)

        if (description === '') {
            setisDisabled(true)
        } else if (description !== '' && description.trim().length <= 10) {
            setisDisabled(true)
            setMessage('Description must be at least 10 characters')
        } else {
            setisDisabled(false)
            setMessage('')
        }

        } 
        const handleSubmit = (e) => {
            e.preventDefault()
            if (description.trim().length > 10) {
                const NewTask = {
                    id: Date.now(),
                    title: title,
                    description: description,
                    status: 'Incomplete'
                }
                addTask(NewTask)
                setTitle('')
                setDescription('')
            }
        }
  return (
    <div>
      <Card>
        <h2 className="text-[13px] text-slate-400 py-4 italic">New Task</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col w-[80vw] mx-auto space-y-1">
            <label className="text-teal-400 text-[13px] font-semibold">Title:</label>
            <input
            className="placeholder:italic placeholder:text-slate-400 text-slate-400 block bg-zinc-700 rounded-md py-1 px-2 text-[12px] focus:outline-none focus:border-teal-600 focus:ring-teal-600 focus:ring-1"
            placeholder="Task Title..."
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            /> 
            </div>
            <div className="flex flex-col w-[80vw] mx-auto space-y-1 mt-2">
            <label className="text-teal-400 text-[13px] font-semibold">Description:</label>
            <textarea 
            className="placeholder:italic placeholder:text-slate-400 text-slate-400 block bg-zinc-700 rounded-md py-1 px-2 text-[12px] focus:outline-none focus:border-teal-600 focus:ring-teal-600 focus:ring-1" 
            placeholder="Description..." 
            type="text"
            required
            onChange={handleDescChange}
            value={description}
            /> 
            {message && <p className="text-red-500 text-[10px] italic">{message}</p>}
            </div>
            <button className="bg-teal-600 font-mono text-white w-[80vw] mx-auto text-[12px] px-4 py-1 mt-4 rounded-md mb-3" disabled={disabled}>
            Add Task
            </button>
        </form>
      </Card>
    </div>
  )
}

export default NewTask