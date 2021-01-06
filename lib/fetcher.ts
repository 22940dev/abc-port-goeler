export default async function Fetcher(...args) {
    // @ts-ignore this is fine
    const res = await fetch(...args)

    return res.json()
}
