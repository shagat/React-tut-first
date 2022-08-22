import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "../../store/favourites-context";
import FavouriteContext from "../../store/favourites-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              My Favourites<span>{favouriteCtx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
