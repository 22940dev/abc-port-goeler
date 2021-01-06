import { AppProps } from "next/app"
import "@/styles/globals.css"
import "@/styles/dracula.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "next-themes"
import Head from "next/head"
import React from "react"
import MDXComponents from "@/components/mdx/Index"
import { MDXProvider } from "@mdx-js/react"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <MDXProvider components={MDXComponents}>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href={
                            "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        }
                        rel="stylesheet"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </MDXProvider>
        </ThemeProvider>
    )
}
