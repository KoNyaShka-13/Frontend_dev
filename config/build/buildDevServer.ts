import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // Достаем порт из опций вебпака конфига
        open: true, // Автоматически будет открывать страницу с приложением
        historyApiFallback: true, // Помогает проксировать страницы через корневую страницу(используется, где только одна html страница)
    };
}
