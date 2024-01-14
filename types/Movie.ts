export interface Movie {
    id: number
    title: string
    genre_ids: Array<number>
    release_date: string
    runtime: number | null
    overview: string
    poster_path: string
}
