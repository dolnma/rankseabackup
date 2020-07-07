export const fetcher = async function (...args) {
    const res = await fetch(...args)
    return res.json()
}
