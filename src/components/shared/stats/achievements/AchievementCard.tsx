'use strict';
import { ProgressBar } from '@/components/core';
import type { Achievement, User } from '@types';
import { useState } from 'react';
type Props = {
    achievement: Achievement;
    user: User;
};

const AchievementCard = ({ user, achievement }: Props) => {
    const userAchievement = user.achievements[achievement.id];
    const completedCount = userAchievement.criteriaStatus.reduce(
        (count, curr) => count + (curr ? 1 : 0),
        0,
    );
    const [show, setShow] = useState(true);

    const onClick = () => {
        setShow(prev => !prev);
    };

    return (
        <div className='drop-shadow-xl p-2 bg-light-surface-tertiary dark:bg-dark-surface-tertiary flex-col text-center gap-3'>
            <h1 className='mb-2 text-lg font-inter font-bold text-light-surface-onTertiary dark:text-dark-surface-onTertiary'>
                {achievement.name}
            </h1>
            <h2 className='mb-2 text-md font-inter font-bold text-light-surface-onTertiary dark:text-dark-surface-onTertiary'>
                {achievement.description}
            </h2>
            <ProgressBar
                progress={completedCount}
                max={achievement.criteria.length}
                className='m-auto'
            />
            {show && (
                <ul className='m-1'>
                    {achievement.criteria.map((criterion, index) => {
                        return (
                            <li
                                key={achievement.id + index}
                                className='text-sm font-inter font-bold text-light-surface-onTertiary dark:text-dark-surface-onTertiary'>
                                <input
                                    type='checkbox'
                                    checked={
                                        userAchievement.criteriaStatus[index]
                                    }
                                    className='mr-2'
                                    disabled={true}
                                />
                                {criterion.description}
                            </li>
                        );
                    })}
                </ul>
            )}
            <div
                className='btn bg-transparent border-collapse'
                onClick={onClick}>
                {' '}
                {show ? 'O' : 'V'}
            </div>
        </div>
    );
};

export default AchievementCard;
