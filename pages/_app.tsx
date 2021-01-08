import { AppProps } from "next/app"
import "@/styles/globals.css"
import "@/styles/dracula.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "next-themes"
import Head from "next/head"
import React from "react"
import MDXComponents from "@/components/mdx/Index"
import { MDXProvider } from "@mdx-js/react"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import { useAnalytics } from "@/lib/analytics"

export default function App({ Component, pageProps }: AppProps) {
    useAnalytics()
    return (
        <ThemeProvider attribute="class">
            <MDXProvider components={MDXComponents}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href={
                            "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        }
                        rel="stylesheet"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/static/icons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>
                </Head>
                <DefaultSeo {...SEO} />
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </MDXProvider>
        </ThemeProvider>
    )
}
