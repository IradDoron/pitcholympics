import React from 'react'


type Props = {
    onChange: (value: any) => void,
    options: string[]
    value?: string
}
const SelectInput = ({ onChange, options, value }: Props) => {
    return (
        <select value={value} onChange={onChange}>
            {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}

        </select>
    )
}

export default SelectInput