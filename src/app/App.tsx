import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';// Почему-то эта строчка и строчка выше равнозначны, хоть эта не идет глубоко
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();// Удалять полностью нельзя, так как темы вешаются на корневой блок
    return (
        // <div className={`app ${theme}`}> Если не было бы хелпера, то классы закидывал бы так
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
