import { Button, Input } from '@/components/core';
import { Text } from '@core';

type Props = {
    handleCurrentPrerequisiteChange: (
        // eslint-disable-next-line no-unused-vars
        e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    currentPrerequisite: string;
    handleAddPrerequisiteClick: () => void;
};

export const PrerequisitesInput = ({
    handleCurrentPrerequisiteChange,
    currentPrerequisite,
    handleAddPrerequisiteClick,
}: Props) => {
    return (
        <label>
            <span>
                <Text>New prerequisite:</Text>
            </span>
            <Input
                onChange={handleCurrentPrerequisiteChange}
                className='w-auto min-w-[200px]'
                value={currentPrerequisite}
            />
            <Button
                onClick={handleAddPrerequisiteClick}
                label='Add Prerequisite'
            />
        </label>
    );
};
