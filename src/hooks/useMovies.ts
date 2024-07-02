import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import moviesService from "../services/moviesService";

interface movieQuery{
    genreId: number,
    sortValue: string,
}

const useMovies = (query: movieQuery) => {
  return useInfiniteQuery({
    queryKey: ["movies", query],
    queryFn: ({pageParam}) => moviesService.getMoviesByGenre(query.genreId, pageParam, query.sortValue),
    initialPageParam: 1,
    getNextPageParam : (lastPage, allPages) => {
      return (lastPage.total_pages > allPages.length  ? allPages.length + 1 : undefined);
    }
    
  });
};

export default useMovies;
