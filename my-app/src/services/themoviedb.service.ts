import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '8c04d873f9bf02d9fab3d03cd93e5e65',
        language: "pt-BR",
    }
})

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

export const getDetailsMedia = async (id: number) => {
    const response = await api.get(`/movie/${id}`)
    return response.data;
}