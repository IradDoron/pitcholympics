import Label from '@/components/shared/profileInfo/Label'
import SelectInput from '@/components/shared/profileInfo/SelectInput'
import TextInput from '@/components/shared/profileInfo/TextInput'
import React from 'react'

type Props = {
    label: string,
    isDisabled?: boolean,
    inputType: 'text' | 'select',
    options?: string[]
    onChange?: (value: any) => void
    value?: string
}

const ProfileInfo = ({ label, isDisabled = false, inputType, options = [], onChange = () => { }, value = '' }: Props) => {



    return (
        <Label label={label}>
            {inputType === 'text' ? (<TextInput onChange={onChange} value={value} />) : <SelectInput onChange={onChange} options={options} />}
        </Label>
    )
}

export default ProfileInfo