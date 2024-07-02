import { useQuery } from "@tanstack/react-query"
import apiService from "../services/apiService"
import genresService from "../services/genresService"


const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: genresService.getGenres,
    
  })
}

export default useGenres;
