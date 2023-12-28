import { splitCamelCaseToString } from '@/lib/utils';
import { Game, User } from '@types';

type Props = {
    game: Game;
    user: User;
};

const GameInfo = ({ game, user }: Props) => {
    const name = splitCamelCaseToString(game.name); // Get the game name
    const gameProgress = user.gameProgress[game.name];
    const passedLevels = gameProgress
        ? Object.values(gameProgress)
              .filter(level => level === 'passed')
              .map(level => level)
        : [];

    const levelsCleared = passedLevels.length;

    const levelCount = game.game.reduce(
        (count, stage) => count + stage.length,
        0,
    );

    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-lg text-light-background-onDefault dark:text-dark-background-onDefault font-inter font-bold '>
                {name}
            </h1>
            <h1 className='text-lg text-light-background-onDefault dark:text-dark-background-onDefault font-inter font-bold '>
                {`${levelsCleared}/${levelCount}`}
            </h1>
        </div>
    );
};
export default GameInfo;
