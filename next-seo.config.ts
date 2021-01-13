const title = "Coding Castle – Web Development"
const description =
    "My name is Patrick Göler von Ravensburg and I'm a Full Stack Web Developer, Business Informatics Student and Space Enthusiast"

const SEO = {
    title,
    description,
    canonical: "https://codingcastle.dev",
    openGraph: {
        type: "website",
        locale: "en_DE",
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
