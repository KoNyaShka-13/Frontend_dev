import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";//Без скобок и асинка не будет работать
import {MainPageAsync} from "./pages/MainPage/MainPage.async";//Если правильно написал, но ошибка есть, можно попробовать просто переписать заново, бывает, срабатывает

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
