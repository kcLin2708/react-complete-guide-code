import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage(props) {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  // loader() is not a react component, i.e. it can't be used in react components.
  // any browser functions can be used in loader functions
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    return response;
  }
}
