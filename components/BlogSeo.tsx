import { ArticleJsonLd, NextSeo } from "next-seo"

type Props = {
    title: string
    summary: string
    publishedAt: string
    url: string
    image: string
}

export default function BlogSeo({ title, summary, publishedAt, url, image }: Props) {
    const date = new Date(publishedAt).toISOString()
    const featuredImage = {
        url: `https://codingcastle.dev${image}`,
        alt: title,
    }

    return (
        <>
            <NextSeo
                title={`${title} – Coding Castle`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: "article",
                    article: {
                        publishedTime: date,
                    },
                    url,
                    title,
                    description: summary,
                    images: [featuredImage],
                }}
            />
            <ArticleJsonLd
                authorName="Patrick Göler von Ravensburg"
                dateModified={date}
                datePublished={date}
                description={summary}
                images={[featuredImage.url]}
                publisherLogo="/static/icons/android-chrome-192x192.png"
                publisherName="Patrick Göler von Ravensburg"
                title={title}
                url={url}
            />
        </>
    )
}
