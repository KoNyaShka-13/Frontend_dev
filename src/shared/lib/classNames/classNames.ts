
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods ={}, additional: string[] = []): string {//Тем самым они не обязательны, так как уже проинициализированы
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}



