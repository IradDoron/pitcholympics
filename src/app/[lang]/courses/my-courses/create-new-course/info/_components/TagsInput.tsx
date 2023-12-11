import { Button, Input } from '@/components/core';
import Text from '@/components/core/Text';

type Props = {
    // eslint-disable-next-line no-unused-vars
    handleCurrentTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentTag: string;
    handleAddTagClick: () => void;
};

export const TagsInput = ({
    handleCurrentTagChange,
    currentTag,
    handleAddTagClick,
}: Props) => {
    return (
        <label>
            <span>
                <Text>New tag:</Text>
            </span>
            <Input
                onChange={handleCurrentTagChange}
                className='w-auto min-w-[200px]'
                value={currentTag}
            />
            <Button onClick={handleAddTagClick} label='Add Tag' />
        </label>
    );
};
