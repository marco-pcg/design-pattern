import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [dark, setDark] = useState<boolean>(() => 
        document.documentElement.classList.contains('dark')
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            className="
                rounded-lg border border-gray-300 px-3 py-1 text-xs
                text-gray-700 transition hover:bg-gray-100
                dark:border-gray-600 dark:text-gray-200
                dark:hover:bg-gray-800
            "
        >
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    )
}