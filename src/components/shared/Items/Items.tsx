import { gameItems } from '@mocks';
import { GameItem } from '@types';
import { CSSProperties } from 'react';
import { ItemCard } from './ItemCard';

const GAME_ITEMS = {

}

export const Items = () => {
    const items: GameItem[] = gameItems;

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
    };

    return (
        <div style={containerStyle}>
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};
