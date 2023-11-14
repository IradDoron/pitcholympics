import React from 'react'


type Props = {
    onChange: (value: any) => void,
    options: string[]
}
const SelectInput = ({ onChange, options }: Props) => {
    return (
        <select onChange={onChange}>
            {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}

        </select>
    )
}

export default SelectInput