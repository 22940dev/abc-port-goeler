const title = "Patrick Goeler – Web Developer"
const description = "Full Stack Web Developer | Business Informatics Student | Space Enthusiast"

const SEO = {
    title,
    description,
    canonical: "https://pgvr.dev",
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://pgvr.dev",
        title,
        description,
        images: [
            {
                url: "https://pgvr.dev/static/images/banner.png",
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: "@patrickgoeler",
        site: "@patrickgoeler",
        cardType: "summary_large_image",
    },
}

export default SEO
