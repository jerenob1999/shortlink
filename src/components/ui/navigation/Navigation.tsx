import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

function Navigation({ children, className }: Props) {
  return (
    <header className={className}>
      {children}
    </header>
  )
}

export default Navigation