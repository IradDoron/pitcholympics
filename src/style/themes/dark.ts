'use client';

import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#fff',
        },
    },

    typography: {
        fontFamily: 'Roboto',
    },
});
