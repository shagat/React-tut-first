import React from "react";
import { Outlet } from "react-router-dom";
function AllMeetupsPage() {
  return (
    <div>
      All Meetups Page
      <Outlet />
    </div>
  );
}
export default AllMeetupsPage;
