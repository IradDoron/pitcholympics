import React from 'react'

type Props = {
    label: string;
    onClick: () => void;
}

const Button = ({label,onClick}: Props) => {
  return (
    <button className='px-6 py-3 bg-[#8F9BFF] dark:bg-[#3045FF] text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700 hover:text-white' onClick={onClick}>
    {label}
    </button>
  )
}

export default Button