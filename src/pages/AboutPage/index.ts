import { AboutPageAsync } from './ui/AboutPage.async';// В модуле пути должны быть относительными

export { // Выносим только асинхронный компонент, чтобы уменьшить размер бандла
    AboutPageAsync as AboutPage, // Хоть наружу выходит асинхронный компонент, мы его можем выгрузить под другим названием для "удобства"(не понял полностью, но так в курсе)
};
