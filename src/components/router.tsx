import HowToPlay from "./how-to-play";
import MainMenu from "./main-menu";
import { Route, Routes } from "react-router-dom";
import PickCategory from "./pick-category";
import Movies from "./in-game/movies";
import TvShows from "./in-game/tv-shows";
import Countries from "./in-game/countries";
import CapitalCities from "./in-game/capital-cities";
import Animals from "./in-game/animals";
import Sports from "./in-game/sports";

function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/pick-category" element={<PickCategory />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/capital-cities" element={<CapitalCities />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </div>
  );
}

export default PageRouter;
