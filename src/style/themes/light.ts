'use client';

import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
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
});
