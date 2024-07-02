import { Button, List, ListItem, Text, VStack } from "@chakra-ui/react";
import {Genre} from "../services/genresService";
import useGenres from "../hooks/useGenres";

interface Props {
  onChange: (genre: Genre) => void;
  currentGenre: Genre;
}

const Aside = (props: Props) => {

  const {data, isLoading, error} = useGenres();

  let genres = data?.genres;


  // const [genres, setGenres] = useState<Genre[]>([]);

  // useEffect(() => {
  //   async function getAllGenres() {
  //     try {
  //       let response = await apiService.getGenres();
  //       console.log("Genres:", response.data);
  //       setGenres(response.data.genres);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getAllGenres();
  // }, []);


  if(error){
    return <p>{error.message}</p>
  }

  return (
    <>
      <VStack alignItems={"start"}>
        <Text ml={3} fontSize={"2xl"} as={"b"}>
          Genres
        </Text>
        <List >
          {genres?.map((genre) => (
            <ListItem key={genre.id}>
              <Button variant={'ghost'}
                fontWeight={props.currentGenre.id == genre.id ? 'bold' : 'normal'}
                onClick={() =>
                  props.onChange({ id: genre.id, name: genre.name })
                }
              >
                {genre.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </>
  );
};

export default Aside;
