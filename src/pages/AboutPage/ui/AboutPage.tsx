import React from 'react';
import { useTranslation } from 'react-i18next';// Чтобы были другие языки

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
