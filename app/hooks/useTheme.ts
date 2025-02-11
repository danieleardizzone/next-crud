import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme);
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(storedTheme);
        } else {
            document.documentElement.classList.add('light');
        }
    }, []);

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
    };

    return { theme, changeTheme };
}