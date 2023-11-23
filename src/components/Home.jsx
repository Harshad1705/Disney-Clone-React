import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { movieSlics, setMovies } from "../features/movie/movieSlics";
import { selectUserName } from "../features/user/userSlics";
import movieData from "../disneyPlusMoviesData";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    recommends = [];
    newDisneys = [];
    originals = [];
    trending = [];

    for (let movies in movieData) {
      const movie = movieData[movies];
      const type = movie["type"];
      // console.log(type);
      switch (type) {
        case "recommend":
          recommends = [...recommends, { movie }];
          break;
        case "new":
          newDisneys = [...newDisneys, { movie }];
          break;
        case "original":
          originals = [...originals, { movie }];
          break;
        case "trending":
          trending = [...trending, { movie }];
          break;
        default:
          break;
      }
    }
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName, recommends, trending, originals, newDisneys]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
