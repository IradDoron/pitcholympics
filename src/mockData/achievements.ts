import { Achievement } from '@/types';

const achievements: Achievement[] = [
	{
		id: '1',
		name: 'Daily Streak',
		description: 'Maintain a daily gameplay streak for a week',
		criteria: [
			{
				description: 'Play a game in a one day period',
			},
			{
				description: 'Play a game every day for 2 days',
			},
			{
				description: 'Play a game every day for 3 days',
			},
			{
				description: 'Play a game every day for 4 days',
			},
			{
				description: 'Play a game every day for 5 days',
			},
			{
				description: 'Play a game every day for 6 days',
			},
			{
				description: 'Play a game every day for 7 days',
			},
		],
		image: 'streak-image.png', // Image URL
		category: 'Streak',
		streakType: 'Daily',
		maxAmount: 'infinite',
	},
];

export default achievements;
