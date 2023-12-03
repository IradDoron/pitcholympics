// Define a type for the achievement's completion status
export type AchievementStatus = 'NotStarted' | 'InProgress' | 'Completed';

export type AchievementCriteria = {
    description: string;
};

// Define a base achievement type
export type BaseAchievement = {
    id: string;
    name: string;
    description: string;
    criteria: AchievementCriteria[];
    image: string;
    maxAmount: number | 'infinite';
};

// Define specific achievement categories using type
export type PlaytimeAchievement = BaseAchievement & {
    category: 'Playtime';
};

export type GameCountAchievement = BaseAchievement & {
    category: 'GameCount';
};

export type StreakAchievement = BaseAchievement & {
    category: 'Streak';
    streakType: 'Daily' | 'Weekly' | 'Monthly';
};

export type LongPlayAchievement = BaseAchievement & {
    category: 'LongPlay';
    playtime: number; // Playtime duration in hours
};

export type GameVarietyAchievement = BaseAchievement & {
    category: 'GameVariety';
};

export type TotalGamesPlayedAchievement = BaseAchievement & {
    category: 'TotalGamesPlayed';
    count: number; // Total games played
};

export type GameMarathonAchievement = BaseAchievement & {
    category: 'GameMarathon';
    gameName: string;
};

export type PlaytimeRecordAchievement = BaseAchievement & {
    category: 'PlaytimeRecord';
    recordType: 'Daily' | 'Weekly';
};

export type LeaderboardClimberAchievement = BaseAchievement & {
    category: 'LeaderboardClimber';
    leaderboardType: 'Playtime' | 'HighScore';
};

// Define a union type to represent all possible achievement types
export type Achievement =
    | PlaytimeAchievement
    | GameCountAchievement
    | StreakAchievement
    | LongPlayAchievement
    | GameVarietyAchievement
    | TotalGamesPlayedAchievement
    | GameMarathonAchievement
    | PlaytimeRecordAchievement
    | LeaderboardClimberAchievement;
