// import { getFeaturedEvents } from '../dummy-data';
import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Pista Events</title>
        <meta
          name="description"
          content="Find a lot of Events that make you happier"
        />
      </Head>
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
    revalidate: 1800,
  };
}

export default HomePage;
