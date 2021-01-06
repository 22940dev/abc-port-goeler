import BlogListItem from "@/components/BlogListItem"
import Title from "@/components/Title"
import { FrontMatter } from "@/lib/interfaces"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { NextSeo } from "next-seo"
import React from "react"

type Props = {
    posts: FrontMatter[]
}

export default function Blog({ posts }: Props) {
    const url = "https://leerob.io/blog"
    const title = "Blog – Patrick Goeler"
    const description = "Let's talk about web development trends, tips and tricks"
    const filteredBlogPosts = posts.sort(
        (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />
            <div className="prose dark:prose-light lg:prose-lg">
                <h1>Blog</h1>
                <p>
                    I occasionally write about stuff in the WebDev world. This could be anything
                    from tutorials, snippets or other cool things I deem share worthy. That being
                    said, I don't have a lot of writing experience so bear with me 😅.
                </p>
            </div>
            <Title variant="h2" className="mb-4 mt-8">
                All Posts
            </Title>
            {filteredBlogPosts.map((frontMatter) => (
                <BlogListItem
                    key={frontMatter.title}
                    title={frontMatter.title}
                    summary={frontMatter.summary}
                    slug={frontMatter.slug}
                />
            ))}
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog")

    return { props: { posts } }
}
