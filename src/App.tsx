import {
  Grid,
  GridItem,
  Show,
  useColorModeValue
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Aside from "./Components/Aside.tsx";
import MainDisplay from "./Components/MainDisplay.tsx";
import NavBar from "./Components/NavBar.tsx";
import { Movie } from "./services/moviesService.ts";
import { Genre } from "./services/genresService.ts";



const App = () => {
  const [currentGenre, setCurrentGenre] = useState({ id: 28, name: "Action" });
  const [searchView, setSearchView] = useState(false);

  function changeGenre(genre: Genre) {
    setCurrentGenre(genre);
  }

  useEffect(() => {
    console.log("Updated Genre:", currentGenre);
  });

  const bg = useColorModeValue("white", "gray.800");
  return (
    <>
      <Grid
        backgroundColor={bg}
        px={5}
        py={1}
        templateAreas={{
          lg: `"nav nav nav nav " "aside main main main"`,
          base: `"nav" "main"`,
        }}
        gridTemplateColumns={{ lg: "1fr 5fr", base: "1fr" }}
      >
        <GridItem area="nav" display={"flex"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem mt={"8"} area="aside">
            <Aside  currentGenre={currentGenre} onChange={changeGenre}></Aside>
          </GridItem>
        </Show>
        <GridItem mt={"8"} area="main">
          <MainDisplay currentGenre={currentGenre}></MainDisplay>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
export type { Genre, Movie };

