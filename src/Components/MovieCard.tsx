import { Card, CardBody, Image, Text, VStack } from "@chakra-ui/react";
import image from "../assets/dummy-image.jpg";
import { Movie } from "../App";

interface Props {
  movie: Movie;
}

const MovieCard = (props: Props) => {
  let text =props.movie.original_title;
  // if(text.length >24){
  //   text = text.substring(0, 24);
  //   text = text + "...";
  // }

  return (
    <Card borderRadius={10} overflow={'hidden'} size={"md"}>
      <Image src={"http://image.tmdb.org/t/p/w500" + props.movie.backdrop_path}></Image>
      <CardBody>
        <VStack alignItems={"start"}>
          <Text>{text}</Text>
          <Text>{"Popularity: " + props.movie.popularity}</Text>
          <Text>{"Vote Count: " + props.movie.vote_count}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
