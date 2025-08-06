import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
// Чтобы работали ссылки, что находятся, к примеру в навбаре.сторис
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
