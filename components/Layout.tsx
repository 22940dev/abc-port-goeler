import Footer from "./Footer"
import Nav from "./Nav"

type Props = {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen antialiased flex flex-col">
            <Nav />
            <div className="px-8 flex-1 flex flex-col">
                <main className="flex flex-col flex-1 max-w-2xl mx-auto w-full mb-16">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
