import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,//Означает, что абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],//Таким образом   сможем обращаться к ней по абсолютному пути
        mainFiles: ['index'],//Для каждого модуля этот файл будет главным
        alias: {}//Для комфорта обозначения абсолютных путей
        //Если оставить элиас пустым, а модулес и преферабсолют обозначить, то можно будет обращаться к папкам на прямую
    }
}
