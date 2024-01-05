'use client';

import { ThemeContext } from '@/context/ThemeContext';
import { Button } from '@mui/material';
import React, { useContext } from 'react';

export const ThemeToggler = () => {
    const { theme } = useContext(ThemeContext);

    const themes = ['light', 'dark'] as const;

    return (
        <div className='flex flex-row gap-2'>
            <span>Theme: {theme}</span>
            {themes.map(theme => (
                <Button
                    key={theme}
                    variant='contained'
                    onClick={() => setTheme(theme)}>
                    {theme}
                </Button>
            ))}
        </div>
    );
};
