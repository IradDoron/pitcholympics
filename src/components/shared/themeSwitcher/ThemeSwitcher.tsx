'use client';

import { useTheme } from '@/context/ThemeProvider';
import { ThemeMode } from '@/types';

const ThemeSwitcher = () => {
    const { setMode } = useTheme();

    const handleThemeChange = (mode: ThemeMode) => {
        setMode(mode);
    };

    return (
        <div>
            <button onClick={() => handleThemeChange('dark')}>Dark</button>
            <button onClick={() => handleThemeChange('light')}>Light</button>
        </div>
    );
};

export default ThemeSwitcher;
