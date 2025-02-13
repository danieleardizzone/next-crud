'use client';

// import useTheme, { Theme } from '@/app/hooks/useTheme';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);


    return (
        <div>
            {mounted &&
                <button
                    onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
                    Switch to {resolvedTheme === 'light' ? 'dark' : 'light'} theme
                </button>
            }
        </div>

    );
}