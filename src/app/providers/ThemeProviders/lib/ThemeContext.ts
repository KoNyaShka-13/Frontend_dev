import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme;//Значение темы
    setTheme?: (theme: Theme) => void//Функция, которая устанавливает определенную тему
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';//Таким образом можно сохранить тему, даже, если браузер закрыли
