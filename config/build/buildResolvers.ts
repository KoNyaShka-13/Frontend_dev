import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],//Указываем те файлы, для которых не будем указывать расширения при импорте
    }
}
