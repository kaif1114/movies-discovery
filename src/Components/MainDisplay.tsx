import {
  Button,
  Grid,
  GridItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../App";
import MovieCard from "./MovieCard";
import PageBar from "./PageBar";
import SkeletonCard from "./SkeletonCard";
import SortSelector from "./SortSelector";
import useMovies from "../hooks/useMovies";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

interface Props {
  currentGenre: Genre;
}
interface orderByObj {
  value: string;
  label: string;
}

const MainDisplay = (props: Props) => {
  // const [page, setPage] = useState(1);

  const [orderBy, setOrderBy] = useState({
    value: "popularity.desc",
    label: "Popularity Descending",
  });

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // function changePage(page: number) {
  //   setPage(page);
  // }
  function changeOrderBy(order: orderByObj) {
    setOrderBy(order);
  }

  let { data, isLoading, error, isFetching, fetchNextPage, hasNextPage } =
    useMovies({
      genreId: props.currentGenre.id,
      sortValue: orderBy.value,
    });

  let dataLength =
    data?.pages.reduce((total, page) => (total += page.results.length), 0) || 0;

  //  let fetchedMovies = data?.results;

  //   const [fetchedMovies, setfetchedMovies] = useState<Movie[]>([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function getfetchedMovies() {
  //     try {
  //       setLoading(true);
  //       let response = await apiService.getMoviesByGenre(
  //         props.currentGenre!.id,
  //         page,
  //         orderBy.value
  //       );
  //       setfetchedMovies(response.data.results);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //   }
  //   getfetchedMovies();
  // }, [page, props.currentGenre, orderBy]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Text fontWeight={"bold"} fontSize={"5xl"}>
        {props.currentGenre.name}
      </Text>
      <SortSelector
        onChange={changeOrderBy}
        currentOrder={orderBy}
      ></SortSelector>
      <VStack>
        <InfiniteScroll
          dataLength={dataLength}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<Spinner></Spinner>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid
            mb={1}
            rowGap={{ lg: 3, base: 3 }}
            columnGap={{ lg: 3, base: 3 }}
            templateColumns={{ lg: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
            templateRows={{ lg: "repeat(4, 1fr)", base: "repeat(10, 1fr)" }}
          >
            {isLoading
              ? skeletons.map((skeleton) => <SkeletonCard></SkeletonCard>)
              : data?.pages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.results.map((movie) => (
                      <GridItem key={movie.id}>
                        <MovieCard movie={movie}></MovieCard>
                      </GridItem>
                    ))}
                  </React.Fragment>
                ))}
          </Grid>
        </InfiniteScroll>


        {/* {isLoading
            ? skeletons.map((skeleton) => <SkeletonCard></SkeletonCard>)
            : data?.pages.map((page) => page.results.map(movie => (<GridItem key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </GridItem>))
              )} */}

        {/* {hasNextPage && < Button  disabled={isFetching} onClick={() => (fetchNextPage())}  my={3}>{isFetching ? 'Loading...' : 'Load More'}</Button>} */}
        {/* <PageBar onClick={changePage}></PageBar> */}

        
      </VStack>
    </>
  );
};

export default MainDisplay;
export type { orderByObj };
