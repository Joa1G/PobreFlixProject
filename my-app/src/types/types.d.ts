export type Media = {
    id: number;
    popularity: number;
    poster_path: string;
    title?: string;
    name?: string;
    overview?: string;
    vote_average?: number;
    release_date?: string;
    budget?: number;
    tagline?: string;
    runtime?: number;
    vote_average?: number
    original_language?: string;
    revenue?: number
    status?: string;
}

export type Sections = {
    title: string,
    data: Media[]
}