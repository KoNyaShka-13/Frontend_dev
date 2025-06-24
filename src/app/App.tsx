import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
//import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";//Без скобок и асинка не будет работать
//import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";
//Если правильно написал, но ошибка есть, можно попробовать просто переписать заново, бывает, срабатывает
//import {useTheme} from "app/providers/ThemeProviders/lib/useTheme";//Чтобы динамически изменять темы
import {useTheme} from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";//Почему-то эта строчка и строчка выше равнозначны, хоть эта не идет глубоко
//import { AboutPage } from 'pages/AboutPage';
//import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();//Удалять полностью нельзя, так как темы вешаются на корневой блок
    return (
        //<div className={`app ${theme}`}> Если не было бы хелпера, то классы закидывал бы так
        <div className={classNames('app', {}, [theme])}>    
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
            
            
        </div>
    );
};

export default App;
