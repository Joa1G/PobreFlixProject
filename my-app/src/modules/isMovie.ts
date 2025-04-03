export default function isMovie(title: string): boolean {
    if (title.includes("Filmes")) {
        return true;
    } else {
        return false;
    }
}