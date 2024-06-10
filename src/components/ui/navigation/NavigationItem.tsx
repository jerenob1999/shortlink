import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  href: string
  className?: string
}

function NavigationItem({ className, title, href }: Props) {
  return (
    <div className={className}>
      <Link href={href}>
        {title}
      </Link>
    </div>
  )
}

export default NavigationItem