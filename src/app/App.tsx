import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
//import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";//Без скобок и асинка не будет работать
//import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";
//Если правильно написал, но ошибка есть, можно попробовать просто переписать заново, бывает, срабатывает
import {useTheme} from "app/providers/ThemeProviders/lib/useTheme";//Чтобы динамически изменять темы
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        //<div className={`app ${theme}`}> Если не было бы хелпера, то классы закидывал бы так
        <div className={classNames('app', {}, [theme])}>    
            <button onClick={toggleTheme}>Тема</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
