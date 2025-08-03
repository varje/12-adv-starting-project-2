import { Link } from "react-router-dom";

const EVENTS = [
  { id: '1', title: 'Event 1' },
  { id: '2', title: 'Event 2' },
  { id: '3', title: 'Event 3' },
];

function EventsPage() {
  return (
    <>
      <h1>My Events Page</h1>
      <ul>
        {EVENTS.map((event)=>(
            <li key={event.id}>
                <Link to={event.id}>{event.title}</Link>
            </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;