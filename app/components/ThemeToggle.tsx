'use client';

import useTheme, { Theme } from '@/app/hooks/useTheme';

export default function ThemeToggle() {
    const { theme, changeTheme } = useTheme()

    return (
        <div>
            <button
                onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>
        </div>
    );
}