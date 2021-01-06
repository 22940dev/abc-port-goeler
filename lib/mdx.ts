import MDXComponents from "@/components/mdx/Index"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import renderToString from "next-mdx-remote/render-to-string"
import mdxPrism from "mdx-prism"
import readingTime from "reading-time"

const root = process.cwd()

export async function getFiles(type: string) {
    return fs.readdirSync(path.join(root, "data", type))
}

export async function getFileBySlug(type, slug) {
    const source = slug
        ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
        : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8")

    const { data, content } = matter(source)
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [require("remark-code-titles")],
            rehypePlugins: [mdxPrism],
        },
    })

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data,
        },
    }
}

export async function getAllFilesFrontMatter(type) {
    const files = fs.readdirSync(path.join(root, "data", type))

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(path.join(root, "data", type, postSlug), "utf8")
        const { data } = matter(source)

        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", ""),
            },
            ...allPosts,
        ]
    }, [])
}
