import { User } from '@types';

type Props = {
    user: User;
};

export const GameProgress = ({ user }: Props) => {
    const { gameProgress } = user;
    return (
        <div className='flex flex-col gap-10 justify-center sm:flex-row'>
            <pre>{JSON.stringify(gameProgress, null, 2)}</pre>
        </div>
    );
};
