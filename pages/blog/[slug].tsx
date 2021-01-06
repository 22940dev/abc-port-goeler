import { getFiles, getFileBySlug } from "@/lib/mdx"
import Image from "next/image"
import hydrate from "next-mdx-remote/hydrate"
import MDXComponents from "@/components/mdx/Index"
import BlogSeo from "@/components/BlogSeo"
import { format, parseISO } from "date-fns"
import { MdxRemote } from "next-mdx-remote/types"

type Props = {
    mdxSource: MdxRemote.Source
    frontMatter: any
}

export default function Post({ mdxSource, frontMatter }: Props) {
    const content = hydrate(mdxSource, {
        components: MDXComponents,
    })

    return (
        <>
            <BlogSeo url={`https://leerob.io/blog/${frontMatter.slug}`} {...frontMatter} />
            <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    {frontMatter.title}
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
                    <div className="flex items-center">
                        <Image
                            alt="Patrick Goeler"
                            height={24}
                            width={24}
                            src="/avatar.jpg"
                            className="rounded-full"
                        />
                        <div className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                            {frontMatter.by}
                            {"Patrick Goeler / "}
                            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
                        {frontMatter.readingTime.text}
                        {/* {` • `} */}
                        {/* <ViewCounter slug={frontMatter.slug} /> */}
                    </div>
                </div>
                <div className="max-w-none w-full prose lg:prose-lg dark:prose-light">
                    {content}
                </div>
                {/* <div className="mt-8">
                    <Subscribe />
                </div> */}
                {/* <div className="text-sm text-gray-700 dark:text-gray-300">
                    <a
                        href={discussUrl(frontMatter.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {"Discuss on Twitter"}
                    </a>
                    {` • `}
                    <a href={editUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
                        {"Edit on GitHub"}
                    </a>
                </div> */}
            </article>
        </>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles("blog")

    console.log(posts)

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, ""),
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug("blog", params.slug)
    console.log(post)
    return { props: post }
}
