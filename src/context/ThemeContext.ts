import { createContext } from 'react';

type ContextType = {
    theme: 'light' | 'dark';
};

export const ThemeContext = createContext<ContextType>({
    theme: 'light',
});
