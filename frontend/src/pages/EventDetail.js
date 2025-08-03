import { Link, useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>My Event Details Page</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
