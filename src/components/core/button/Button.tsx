import React from 'react'

type Props = {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className='px-6 py-3 bg-light-primary-main dark:bg-dark-primary-main rounded-[12px] text-light-primary-contrastText dark:text-dark-primary-contrastText text-xl'>
      {label}
    </button>
  )
}

export default Button