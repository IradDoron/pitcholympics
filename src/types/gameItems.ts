// Define a type for the item's rarity
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

// Define a base item type
export type BaseItem = {
	id: string;
	name: string;
	description: string;
	image: string; // URL or image path
	rarity: Rarity;
};

// Define specific item types using type
export type VirtualCurrency = BaseItem & {
	type: 'VirtualCurrency';
	value: number; // Amount of currency
};

export type Consumable = BaseItem & {
	type: 'Consumable';
	usage: string; // Description of how it's used
};

export type CosmeticItem = BaseItem & {
	type: 'CosmeticItem';
	characterId: string; // ID of the character it applies to
};

export type AchievementReward = BaseItem & {
	type: 'AchievementReward';
	achievementName: string; // Name of the associated achievement
};

// Define a union type to represent all possible item types
export type GameItem =
	| VirtualCurrency
	| Consumable
	| CosmeticItem
	| AchievementReward;
