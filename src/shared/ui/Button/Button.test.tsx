import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument(); // Предоставляет методы для поиска элементов в DOM. Автоматически работает с компонентом, отрендеренным через render().
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');// Проверяем, что на кнопке будет класс клиар
        screen.debug();
    });
});
