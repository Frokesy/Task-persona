import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='bg-zinc-800 rounded-md p-2 w-[90vw] mx-auto'>
      {children}
    </div>
  )
}

export default Card
