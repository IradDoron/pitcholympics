'use client';

import { ThemeContext } from '@/context/ThemeContext';
import { Button } from '@mui/material';
import React, { useContext } from 'react';

export const ThemeToggler = () => {
    const { themeName, setThemeName } = useContext(ThemeContext);

    const themes = ['light', 'dark'] as const;

    return (
        <div className='flex flex-row gap-2'>
            <span>Theme: {themeName}</span>
            {themes.map(theme => (
                <Button
                    key={theme}
                    variant='contained'
                    onClick={() => setThemeName(theme)}>
                    {theme}
                </Button>
            ))}
        </div>
    );
};
