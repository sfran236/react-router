import { json, useLoaderData, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError:true , message: 'Could not fetch the data!!!'}
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
    // return response;
  }
}

function EventsPage() {
  const { events } = useLoaderData();
  // const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  return (
    <Suspense fallback={<p style= {{textAlign : 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
  // return <EventsList events={events} />;
}

export default EventsPage;

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
