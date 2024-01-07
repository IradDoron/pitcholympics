import { darkTheme, lightTheme } from '@/style/themes';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/system';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

type ThemeObject = {
    [key: string]: Theme;
};

const themes = {
    light: lightTheme,
    dark: darkTheme,
} as ThemeObject;

type Props = {
    children: React.ReactNode;
};

export const MuiThemeProvider = ({ children }: Props) => {
    const { themeName } = useContext(ThemeContext);
    return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
};
