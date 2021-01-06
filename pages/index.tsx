import BlogListItem from "@/components/BlogListItem"
import Divider from "@/components/Divider"
import ProjectCard from "@/components/ProjectCard"
import Title from "@/components/Title"

export default function Home() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl tracking-tight font-bold mb-4">
                Hi, I'm Patrick Goeler
            </h1>
            <p className="mb-16 text-secondary">
                I'm a web developer currently finishing my master thesis at the University of
                Mannheim. Additionally I work as a Software Engineer at Aioneers 👨‍💻.
            </p>

            <Title variant="h2" className="mb-4">
                Popular Posts
            </Title>
            <BlogListItem
                title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                slug="style-guides-component-libraries-design-systems"
            />

            <Title variant="h2" className="mb-4 mt-8">
                Projects
            </Title>
            <ProjectCard
                title="Music Mash"
                description="Invite other people and this app generates a Spotify playlist according to the top tracks of each one."
                href="https://music-mash.netlify.app/"
                icon="musicmash"
            />

            <Title variant="h2" className="mb-4 mt-8">
                Timeline
            </Title>

            <Title variant="h3" className="mb-4">
                2020
            </Title>
            <ul>
                <li>Software Engineer @ Apliconus</li>
                <li>Software Engineer @ Sovanta</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2019
            </Title>
            <ul>
                <li>Software Engineer @ Apliconus</li>
                <li>Software Engineer @ Sovanta</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2018
            </Title>
            <ul>
                <li>Software Engineer @ Apliconus</li>
                <li>Software Engineer @ Sovanta</li>
            </ul>
        </>
    )
}
