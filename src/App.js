import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<AllMeetupsPage />} />
          <Route path="favourite" element={<FavouritesPage />} />
          <Route path="new-meetup" element={<NewMeetupPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}
export default App;
