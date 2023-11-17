import { Link } from "react-router-dom";


const EVENTS = [
  { id: "E1", title: "Event 1" },
  { id: "E2", title: "Event 2" },
  { id: "E3", title: "Event 3" },
  { id: "E4", title: "Event 4" },
];

const EventsPage = () => {
  return (
    <main>
      <h1>EventsPage</h1>
      {EVENTS.map((event) =>(
        <li key={event.id}>
        <Link to={`/events/${event.id}`}>{event.title}</Link>
        </li>
      ))}
    </main>
  );
};

export default EventsPage;
