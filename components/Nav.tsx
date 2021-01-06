import ThemeToggle from "./ThemeToggle"

import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center max-w-4xl w-full mx-auto p-8 my-0 md:my-8 sticky top-0 z-10 bg-gray-50 dark:bg-gray-900">
            <ThemeToggle />
            <div>
                <Link href="/">
                    <a className="p-1 sm:p-4">Home</a>
                </Link>
                <Link href="/dashboard">
                    <a className="p-1 sm:p-4">Dashboard</a>
                </Link>
                <Link href="/blog">
                    <a className="p-1 sm:p-4">Blog</a>
                </Link>
                <Link href="/about">
                    <a className="p-1 sm:p-4">About</a>
                </Link>
            </div>
        </nav>
    )
}
