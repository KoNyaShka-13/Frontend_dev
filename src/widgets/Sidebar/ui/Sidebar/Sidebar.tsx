import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitсher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);// Состояние, которое отвечает за свернутость и развернутость сайдбара
    // По умолчанию он развернут
    const onToggle = () => {
        setCollapsed((prev) => !prev);// В сет стейт можно передовать колл бек который принимает предыдущее значение, просто, напоминание
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
