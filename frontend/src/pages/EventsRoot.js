import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () =>{
    return (
        <main>
            <EventsNavigation/>
            <Outlet/>
        </main>
    )
}

export default EventsRootLayout