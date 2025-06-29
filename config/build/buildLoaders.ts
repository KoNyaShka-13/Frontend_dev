import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
// babel-loader не нужен, так как мы пишем на ts
// Лоадеры нужно ставить в определенном порядке

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [// Они должны идти в строгом порядке
            // Creates `style` nodes from js strings
            // 'style-loader',
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Чтобы css перешел отдельно в папку в билде и проверка на режим разработки
            { // Translates CSS into CommonJS
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/, // Отображаются файлы, которые нужно пропустить через лоадер
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = { // Чтобы картинки и другие расширения работали
        test: /\.(png|jpe?g|gif|woff2|woff)$/i, // Тут кинул и расширения шрифтов
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
