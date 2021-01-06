import ThemeToggle from "./ThemeToggle"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center max-w-4xl w-full mx-auto p-8 my-0 md:my-8 sticky">
            <ThemeToggle />
            <div>Nav</div>
        </nav>
    )
}
