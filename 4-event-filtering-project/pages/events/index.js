import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
function AllEventsPage() {
  const events = getAllEvents();
  return (
    <React.Fragment>
      <EventList items={events} />
    </React.Fragment>
  );
}
export default AllEventsPage;
