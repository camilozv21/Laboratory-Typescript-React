import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Characters } from '../modules/RickAndMorty/views/Characters';

const Home = lazy(() => import("../modules/Home/views/Home"));
const Characters = lazy(() => import("../modules/RickAndMorty/views/Characters"));
const Scrapbooking = lazy(() => import("../modules/Scrapbooking/views/Scrapbooking"));

export const HomeRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rickandmorty" element={<Characters />} />
        <Route path="/scrapbooking" element={<Scrapbooking />} />
      </Routes>
    </Suspense>
  )
}