import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export function renderWithTranslation(component: ReactNode) {
    return render(// Оборачиваем нужный компонент в обертку и добавляем нужную конфигурацию для перевода
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    );
}
