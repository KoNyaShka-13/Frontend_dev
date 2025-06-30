import { classNames } from './classNames';
// Даже подмена местами классов может сразу выдать ошибку
describe('classNames', () => { // describe позволяет сразу пак тестов написать
    test('with only first param', () => { // Если передать только первый аргумент
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => { // С двумя классами функция должна объединить:
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => { // С модами (true)
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods false', () => { // С модами (false), игнорирует классы из модов, если их значение false
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => { // С модами (undefined)
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
