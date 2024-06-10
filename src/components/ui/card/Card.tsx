import React from 'react'

interface Props {
  children: React.ReactNode
}

function Card({ children }: Props) {
  return (
    <div className='rounded-lg shadow-lg bg-neutral-50 h-96 w-full'>
      {children}
    </div>
  )
}

export default Card