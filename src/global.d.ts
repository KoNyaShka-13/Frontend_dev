declare module '*.scss' {//Чтобы работали импорты опрделенные
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}
