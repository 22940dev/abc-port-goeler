export interface FrontMatter {
    wordCount?: number
    readingTime?: { text: string; minutes: number; time: number; words: number }
    slug: string
    title: string
    publishedAt: string
    summary: string
    image: string
}
