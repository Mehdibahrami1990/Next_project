// import { getFeaturedEvents } from '../dummy-data';
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      {/* <EventList items={featuredEvents} /> */}
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
