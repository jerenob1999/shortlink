import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}
function NavigationContent({ children, className }: Props) {
  return (
    <nav className={className}>
      {children}
    </nav>
  )
}

export default NavigationContent