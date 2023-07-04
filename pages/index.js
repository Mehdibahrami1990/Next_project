import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
function HomePage() {
  const featuresEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuresEvents} />
    </div>
  );
}

export default HomePage;
