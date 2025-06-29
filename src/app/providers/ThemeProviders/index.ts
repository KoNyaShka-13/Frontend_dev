// Это  паблик апи, по сути, регулирует, что мы отдаем наружу
import ThemeProvider from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';
import { Theme } from './lib/ThemeContext';

export {
    ThemeProvider,
    useTheme,
    Theme,
};
