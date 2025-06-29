import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
// Определяем роуты на уровне конфига
const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (// Делаем так, чтобы получить массив нужных данных
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>// Два раза в suspense не должно быть обернуто, если что. Так не правильно
                    )}// Так выглядит структура импортируемого компонента
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
