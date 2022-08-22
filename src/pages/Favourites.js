import { useContext } from "react";
import FavouriteContext from "../store/favourites-context";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
function FavouritesPage() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites!</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;
