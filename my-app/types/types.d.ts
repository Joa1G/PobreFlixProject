export type Media = {
    name?: string,
    title?: string,
    id: number,
    poster_path: string,
}

export type Sections = {
    title: string,
    data: Media[]
}