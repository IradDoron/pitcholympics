'use client';

import { ThemeContext } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/style/themes';
import { ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

type Props = {
    children: React.ReactNode;
};

export const ThemeWrapper = ({ children }: Props) => {
    const [theme, setTheme] = useState('light');
    const { theme } = useContext(ThemeContext);
    return (
        <ThemeContext.Provider value={{ theme }}>
            <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
