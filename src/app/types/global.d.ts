declare module '*.scss' {// Чтобы работали импорты опрделенные
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';// Декларации, чтобы другие расширения работали, сначала их надоо загрузить, кинуть в Билдлоадерс, чтобы их закинуть и тут прописать тоже надо
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;// Задекларировали, чтобы не было ошибок