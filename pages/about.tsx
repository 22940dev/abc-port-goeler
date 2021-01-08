import Link from "@/components/Link"
import { NextSeo } from "next-seo"

export default function About() {
    return (
        <div className="prose dark:prose-light lg:prose-lg">
            <NextSeo
                title="About Me - Patrick Goeler"
                canonical="https://pgvr.dev/about"
                openGraph={{
                    url: "https://pgvr.dev/about",
                    title: "About Me – Patrick Goeler",
                }}
            />
            <h1>About Me</h1>
            <p>
                Hey I'm Patrick Goeler, a business informatics student from Mannheim, Germany.
                Besides my studies I work for <Link href="https://aioneers.com/">Aioneers</Link> as
                a Software Engineer 👨‍💻. My studies are coming to an end though, as I'm working on my
                master thesis in the area of microservices. Fun fact: My full name is "Patrick
                Goeler von Ravensburg", hence the domain name, but that's way too long for any
                username 😂.
            </p>
            <h2>Work Experience</h2>
            <p>
                I started to work very early during my studies to complement the curriculum with
                hands-on experience and industry practice. All positions were as a working student
                which allows me to work full-time during the semester break (like an internship) and
                continue working with reduced load during the semester.
            </p>

            <Link href="https://aioneers.com/">
                <h4>Aioneers</h4>
            </Link>
            <small>
                <strong>May 2020 - Now</strong>
            </small>
            <ul>
                <li>
                    Building a SaaS for closed-loop decision making in supply chains from the ground
                    up
                </li>
                <li>Assist in fundamental architecture and product design decisions</li>
                <li>Full-Stack development with Kubernetes, Node, Angular</li>
            </ul>

            <Link href="https://yasoon.com/">
                <h4>Yasoon GmbH</h4>
            </Link>
            <small>
                <strong>Feb 2020 - May 2020</strong>
            </small>
            <ul>
                <li>Mostly Frontend Development using React and an extensive Redux model</li>
            </ul>

            <Link href="https://sovanta.com/en/">
                <h4>Sovanta AG</h4>
            </Link>
            <small>
                <strong>Sep 2018 - Jun 2019</strong>
            </small>
            <ul>
                <li>
                    Building a custom CMS with Angular, Redux and Kubernetes (mostly Node services)
                </li>
                <li>
                    Chatbot design and interaction with DialogFlow, Microsoft Graph, Slack, SAP
                    Conversational AI and more
                </li>
            </ul>

            <Link href="https://www.apliconus.de/">
                <h4>APLICONUS GmbH</h4>
            </Link>
            <small>
                <strong>Apr 2016 - Aug 2018</strong>
            </small>
            <ul>
                <li>UWP app development for Windows 10</li>
                <li>PWA development using Angular and ASP.NET Core</li>
            </ul>
        </div>
    )
}
