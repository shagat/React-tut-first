import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(enteredData) {
    fetch(
      "",
      {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: { "Content-Type": "application/json" },
      }.then(() => {
        history.replace("/");
      })
    );
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
