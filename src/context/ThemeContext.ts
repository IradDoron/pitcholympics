import { Dispatch, SetStateAction, createContext } from 'react';

type ContextType = {
    themeName: string;
    setThemeName: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType>({
    themeName: 'light',
    setThemeName: () => {},
});
