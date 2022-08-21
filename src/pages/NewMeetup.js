import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function addMeetupHandler(enteredData) {
    fetch("", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
