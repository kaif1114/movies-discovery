import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: "Bearer YOUR_KEY_HERE",
        Accept: "application/json",
    }
});


class apiService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

   getGenres = async () =>{
    let response = await axiosInstance.get<T>(this.endpoint);
    return response.data;
  }
   getMoviesByGenre = async (genreId: number, page: number, sortValue: string) => {
    let response = await axiosInstance.get<T>(this.endpoint, {
      params: {
        page: page,
        with_genres: genreId,
        sort_by: sortValue,
      },
    });
    return response.data;
  }
  async searchMovie(keyword: string) {
    let response = await axiosInstance.get<T[]>(this.endpoint, {
      params: {
        with_keyword: keyword,
      },
    });
    return response.data;
  }
}

export default apiService;
