import {lazy} from "react";//С приставкой async или lazy нужны страницы, чтобы бандлов было несколько и загружалось только то, что необходимо

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!!
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))

