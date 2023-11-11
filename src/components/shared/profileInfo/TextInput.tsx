import React, { ChangeEventHandler } from 'react'

type Props = {
    onChange: (event: any) => void
    value: string
    disabled?: boolean
}
const getStyle = (isDisabled: boolean) => {
    if (isDisabled) {
        return ''
    } else {
        return 'text-gray-500 border-2'
    }


}

const TextInput = ({ onChange, value, disabled = false }: Props) => {

    return (
        <input className={getStyle(disabled)} value={value} onChange={onChange} disabled />
    )
}

export default TextInput