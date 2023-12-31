import EventForm from "../components/EventForm"
import { useLoaderData,useRouteLoaderData } from "react-router-dom";

const EditEventPage = () =>{
    const data = useRouteLoaderData('event-detail')
    return <EventForm method='patch' event={data.event}/>
}

export default EditEventPage