import Link from "next/link"
import useSWR from "swr"
import format from "comma-number"

import fetcher from "@/lib/fetcher"
import Title from "./Title"

type Props = {
    title: string
    summary: string
    slug: string
}

export default function BlogListItem({ title, summary, slug }: Props) {
    // const { data } = useSWR(`/api/views/${slug}`, fetcher)
    // const views = data?.total

    return (
        <Link href={`/blog/${slug}`}>
            <a className="w-full">
                <div className="mb-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Title variant="h4" className="mb-2" thin>
                            {title}
                        </Title>
                        <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                            {/* {`${views ? format(views) : "–––"} views`} */}
                        </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{summary}</p>
                </div>
            </a>
        </Link>
    )
}
