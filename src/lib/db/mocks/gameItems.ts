import COLLECTOR_REWARD from '@assets/gameItems/gem-of-power.png';
import ENCHANTED_AMULET from '@assets/gameItems/gem-of-power.png';
import EXPLORER_REWARD from '@assets/gameItems/gem-of-power.png';
import GEM_OF_POWER from '@assets/gameItems/gem-of-power.png';
import GOLD_COIN from '@assets/gameItems/gem-of-power.png';
import HEALTH_POTION from '@assets/gameItems/gem-of-power.png';
import HIGH_SCORER_REWARD from '@assets/gameItems/gem-of-power.png';
import SPEED_ELIXIR from '@assets/gameItems/gem-of-power.png';
import SUNGLASSES from '@assets/gameItems/gem-of-power.png';
import WIZARD_HAT from '@assets/gameItems/gem-of-power.png';
import { GameItem } from '@types';

export const gameItems: GameItem[] = [
    {
        id: '1',
        name: 'Gold Coin',
        description: 'A shiny gold coin used as virtual currency',
        image: GOLD_COIN,
        rarity: 'Common',
        type: 'VirtualCurrency',
        value: 10,
        quantity: 10,
    },
    {
        id: '2',
        name: 'Health Potion',
        description: 'A potion that restores health',
        image: HEALTH_POTION,
        rarity: 'Uncommon',
        type: 'Consumable',
        usage: 'Drink to restore health points',
        quantity: 10,
    },
    {
        id: '3',
        name: 'Wizard Hat',
        description: 'A stylish wizard hat for your character',
        image: WIZARD_HAT,
        rarity: 'Rare',
        type: 'CosmeticItem',
        characterId: 'wizard-character-123',
        quantity: 10,
    },
    {
        id: '4',
        name: 'Achievement Reward: Explorer',
        description: 'Reward for exploring all regions',
        image: EXPLORER_REWARD,
        rarity: 'Epic',
        type: 'AchievementReward',
        achievementName: 'Explorer',
        quantity: 10,
    },
    {
        id: '5',
        name: 'Gem of Power',
        description: 'A magical gem with incredible power',
        image: GEM_OF_POWER,
        rarity: 'Legendary',
        type: 'VirtualCurrency',
        value: 1000,
        quantity: 10,
    },
    {
        id: '6',
        name: 'Speed Elixir',
        description: 'An elixir that increases movement speed',
        image: SPEED_ELIXIR,
        rarity: 'Rare',
        type: 'Consumable',
        usage: 'Drink to move faster for a limited time',
        quantity: 10,
    },
    {
        id: '7',
        name: 'Sunglasses',
        description: 'Cool sunglasses for your character',
        image: SUNGLASSES,
        rarity: 'Uncommon',
        type: 'CosmeticItem',
        characterId: 'cool-character-456',
        quantity: 10,
    },
    {
        id: '8',
        name: 'Achievement Reward: High Scorer',
        description: 'Reward for achieving a high score',
        image: HIGH_SCORER_REWARD,
        rarity: 'Epic',
        type: 'AchievementReward',
        achievementName: 'High Scorer',
        quantity: 10,
    },
    {
        id: '9',
        name: 'Enchanted Amulet',
        description: 'An amulet with mysterious powers',
        image: ENCHANTED_AMULET,
        rarity: 'Rare',
        type: 'CosmeticItem',
        characterId: 'mystical-character-789',
        quantity: 10,
    },
    {
        id: '10',
        name: 'Achievement Reward: Collector',
        description: 'Reward for collecting a variety of items',
        image: COLLECTOR_REWARD,
        rarity: 'Epic',
        type: 'AchievementReward',
        achievementName: 'Collector',
        quantity: 10,
    },
];
