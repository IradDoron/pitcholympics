import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/system';

type Props = {
    children: React.ReactNode;
    theme: Theme;
};

export const MuiThemeProvider = ({ children, theme }: Props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
