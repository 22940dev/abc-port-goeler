import BlogListItem from "@/components/BlogListItem"
import Divider from "@/components/Divider"
import ProjectCard from "@/components/ProjectCard"
import Title from "@/components/Title"

export default function Home() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl tracking-tight font-bold mb-4">Hi, I'm Patrick</h1>
            <p className="mb-16 text-secondary">
                I'm a web developer currently finishing my master thesis at the University of
                Mannheim. Additionally I work as a Software Engineer at Aioneers 👨‍💻.
            </p>

            <Title variant="h2" className="mb-4">
                Popular Posts
            </Title>
            <BlogListItem
                title="The Perfect Web Development Setup for Windows in 2021"
                summary="Learn how to setup Windows Terminal with WSL 2 to make the perfect Web Development setup on Windows 10."
                slug="webdev-setup"
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
            <ProjectCard
                title="Flötenbot"
                description="Self-hosted Discord Bot that can play music from Spotify and Youtube. By self hosting the bitrate is higher than the one of other public bots which was a pain point for us."
                href="https://github.com/patrickgoeler/floetenbot/"
                icon="flute"
            />
            <ProjectCard
                title="LaunchX"
                description="Shows upcoming SpaceX launches in an easy fashion."
                href="https://launchx.space/"
                icon="launchx"
            />

            <Title variant="h2" className="mb-4 mt-8">
                Timeline
            </Title>

            <Title variant="h3" className="mb-4">
                2021
            </Title>
            <ul>
                <li>✏ Start my master thesis</li>
                <li>😎 Launch this website</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2020
            </Title>
            <ul>
                <li>🥏 Started playing Disc Golf</li>
                <li>🧀 Trip to the Netherlands</li>
                <li>🚢 Trip to Denmark</li>
                <li>🤘 Summer Breeze cancelled so we created our own small scale festival</li>
                <li>👨‍💻 Software Engineer @Aioneers</li>
                <li>👨‍💻 Software Engineer @Yasoon</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2019
            </Title>
            <ul>
                <li>✏ Start Master Degree in Business Informatics @Uni Mannheim</li>
                <li>🎺 Snarky Puppy Concert</li>
                <li>🤘 Summer Breeze Festival</li>
                <li>🥃 Trip to Scotland</li>
                <li>👨‍🎓 Bachelor Degree in Business Informatics @Uni Mannheim</li>
                <li>⛷ Trip to Switzerland</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2018
            </Title>
            <ul>
                <li>👨‍💻 Software Engineer @Sovanta</li>
                <li>🤘 Summer Breeze Festival</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2017
            </Title>
            <ul>
                <li>☕ One Semester in Linköping, Sweden</li>
                <li>🎡 Trip to London</li>
                <li>🤘 Avenged Sevenfold & Disturbed Concert</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2016
            </Title>
            <ul>
                <li>🤘 Summer Breeze Festival</li>
                <li>🐶 Welcomed a new family member</li>
                <li>✈ Trip to the USA</li>
                <li>👨‍💻 Software Engineer @APLICONUS</li>
                <li>🥃 Trip to Scotland</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2015
            </Title>
            <ul>
                <li>✏ Start Bachelor Degree in Business Informatics @Uni Mannheim</li>
                <li>🤘 Summer Breeze Festival</li>
                <li>👨‍🎓 Finish School</li>
            </ul>

            <Divider className="my-8" />

            <Title variant="h3" className="mb-4">
                2013
            </Title>
            <ul>
                <li>🤘 Summer Breeze Festival</li>
            </ul>
        </>
    )
}
