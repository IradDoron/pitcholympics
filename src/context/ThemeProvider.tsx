'use client';

import { ThemeMode } from '@types';
import React, { createContext, useContext, useEffect, useState } from 'react';
interface ThemeContextType {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const handleThemeChange = () => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setMode('dark');
            document.documentElement.classList.add('dark');
        } else {
            setMode('light');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        handleThemeChange();
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export default ThemeProvider;
