
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {//Будет возвращать строку с классами, это удобно, когда классов и настроек с ними много, чтобы не писать это в главном файле
    return [
        cls,
        ...additional,
        ...Object.entries(mods)//Из объекта делаем массив
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}



