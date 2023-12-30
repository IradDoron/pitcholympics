import { gamesData, users } from '@mocks';
import { Game } from '@types';
import { GameInfo } from './GameInfo';

export const GameProgress = () => {
    const user = users[0]; // TODO: Replace with the actual user

    return (
        <div className='flex flex-col gap-10 justify-center sm:flex-row'>
            {gamesData.map((game: Game) => (
                <GameInfo game={game} key={game.name} user={user} />
            ))}
        </div>
    );
};
