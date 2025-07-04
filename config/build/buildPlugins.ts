import HTMLWebpackPlugin from 'html-webpack-plugin';
// import path from "path";
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [// Плагины можно ставить в любом порядке в отличие от лоадеров
        new HTMLWebpackPlugin({
            // Будем использовать файл из паблика, как шаблон, чтобы в него все скрипты вслаивались
            // template: path.resolve(__dirname, 'public', 'index.html')//div.root сейчас не отображается при загрузке, так как создается с нуля, эта строка загружает его
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // Отображает прогресс
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // Понадобится, когда мы будем разбивать файлы на асинхронные и синхронные
        }),
        new webpack.DefinePlugin({ // Можем пробрасывать глобальные ппеременные
            __IS_DEV__: JSON.stringify(true),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({ // Чтобы на постоянке аналайзер не вылезал
            openAnalyzer: false,
        }),
    ];
}
