import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '8c04d873f9bf02d9fab3d03cd93e5e65', 
        language: "pt-BR",
    }
})

export const getDetailsMediaMovies = async (id: number) => {
    const response = await api.get(`/movie/${id}`)
    return response.data;
}

export const getDetailsMediaShows = async (id: number) => {
    const response = await api.get(`tv/${id}`)
    return response.data;
}
export const getShowsNumberOfEpisodes = async ( id: number) => {
    const response = await api.get(`tv/${id}`)
    return response.data.number_of_episodes;
}

export const getShowsNumberOfSeasons = async ( id: number) => {
    const response = await api.get(`tv/${id}`)
    return response.data.number_of_seasons;
}

export const getPopularMovie = async () => {
    const response = await api.get("/discover/movie");
    return response.data.results;
}

export const getTopRatedMovies = async () => {
    const response = await api.get("/movie/top_rated");
    return response.data.results;
}

export const getNewMovies = async () => {
    const response = await api.get("/movie/now_playing");
    return response.data.results;
}

export const getUpComingMovies = async () => {
    const response = await api.get("movie/upcoming");
    return response.data.results;
}

export const getExibitionShows = async () => {
    const response = await api.get("tv/airing_today");
    return response.data.results;
}

export const getOnAirShows = async () => {
    const response = await api.get("tv/on_the_air");
    return response.data.results;
}

export const getPopularShows = async () => {
    const response = await api.get("tv/popular");
    return response.data.results;
}

export const getTopRatedShows = async () => {
    const response = await api.get("tv/top_rated");
    return response.data.results;
}