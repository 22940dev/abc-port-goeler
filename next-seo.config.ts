const title = "Coding Castle – Web Development"
const description = "Full Stack Web Developer | Business Informatics Student | Space Enthusiast"

const SEO = {
    title,
    description,
    canonical: "https://codingcastle.dev",
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://codingcastle.dev",
        title,
        description,
        images: [
            {
                url: "https://codingcastle.dev/static/images/banner.png",
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: "@coding_castle",
        site: "@coding_castle",
        cardType: "summary_large_image",
    },
}

export default SEO
