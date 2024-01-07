'use client';

import { MuiThemeProvider } from '@/context';
import { ThemeContext } from '@/context/ThemeContext';
import { useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const ThemeWrapper = ({ children }: Props) => {
    const [themeName, setThemeName] = useState('light');

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            <MuiThemeProvider>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
