'use client'

import React, { InputHTMLAttributes} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
}

function Input({ className, label, ...props }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center ">
      <label>{label}</label>
      <input className={className} {...props} />
    </div>
  )
}

export default Input