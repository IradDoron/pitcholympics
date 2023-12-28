'use client';

import { Menubar } from '@/components/core';
import { useTheme } from '@/context/ThemeProvider';
import { GearIcon, MoonIcon, SunIcon } from '@icons';
import { IconProps, ThemeMode } from '@types';

type ThemesObject = {
    value: ThemeMode;
    label: string;
    icon: (props: IconProps) => JSX.Element;
};

export const themes = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: GearIcon },
] as ThemesObject[];

export const Theme = () => {
    const { mode, setMode } = useTheme();

    return (
        <Menubar
            trigger={
                <div>
                    {mode === 'light' ? (
                        <SunIcon color='primary' size='medium' />
                    ) : (
                        <MoonIcon color='primary' size='medium' />
                    )}
                </div>
            }
            content={
                <div>
                    {themes.map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.value}
                                className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
                                onClick={() => {
                                    setMode(item.value);
                                    if (item.value !== 'system') {
                                        localStorage.theme = item.value;
                                    } else {
                                        localStorage.removeItem('theme');
                                    }
                                }}>
                                <Icon color='primary' size='medium' />
                                <p
                                    className={`body-semibold text-light-500 ${
                                        mode === item.value
                                            ? 'text-primary-500'
                                            : 'text-dark100_light900'
                                    }`}>
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            }></Menubar>
    );
};
