import apiService from "./apiService";

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface apiResponse{
    page: number,
    results: Movie[],
    total_pages: number;
  }

const moviesService = new apiService<apiResponse>("/discover/movie?include_adult=false&include_video=false&language=en-US");

export default moviesService;
export type {Movie};