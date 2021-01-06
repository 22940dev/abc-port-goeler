import Footer from "./Footer"
import Nav from "./Nav"

type Props = {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen antialiased">
            <Nav />
            <div className="px-8">
                <main className="flex flex-col max-w-2xl mx-auto w-full mb-16 prose lg:prose-xl dark:prose-light">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
