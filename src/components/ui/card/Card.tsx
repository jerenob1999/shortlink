import React from 'react'

interface Props {
  children: React.ReactNode
}

function Card({ children }: Props) {
  return (
    <div className='rounded-lg shadow-lg bg-neutral-50 h-40 w-1/4 p-2 '>
      {children}
    </div>
  )
}

export default Card