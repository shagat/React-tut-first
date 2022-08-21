import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}>
          <Route path="favourite" element={<FavouritesPage />} />
          <Route path="new-meetup" element={<NewMeetupPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
