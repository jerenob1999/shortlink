import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string
}

function Button({ title, ...props }: Props) {

  return (
    <button
      {...props}
      className='rounded-lg bg-blue-600 px-6 py-2 text-neutral-50 hover:bg-blue-900 h-12 font-semibold text-lg'
    >
      {title}
    </button>
  );
}

export default Button;