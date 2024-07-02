import apiService from "./apiService";

interface Genre {
    id: number;
    name: string;
  }

interface apiResponse{
    genres: Genre[]
}

const genresService = new apiService<apiResponse>("/genre/movie/list?language=en");

export default genresService;
export type {Genre};