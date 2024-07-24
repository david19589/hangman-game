import HowToPlay from "./how-to-play";
import MainMenu from "./main-menu";
import { Route, Routes } from "react-router-dom";
import PickCategory from "./pick-category";
import Movies from "./in-game/movies";
function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/pick-category" element={<PickCategory />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default PageRouter;
