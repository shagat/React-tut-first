import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/">
          <Route index element={<AllMeetupsPage />} />
          <Route path="favourite" element={<FavouritesPage />} />
          <Route path="new-meetup" element={<NewMeetupPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
