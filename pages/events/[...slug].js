import { useRouter } from "next/router";
// import { getFilteredEvents } from "../../dummy-data";
import useSWR from "swr";
import Head from "next/head";
import { getFilteredEvents } from "../../helpers/api-util";
import ResultsTitle from "../../components/events/results-title";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
function FilteredEventsPage(props) {
  const router = useRouter();
  // const filterData = router.query.slug;

  const pageHeadeData = (
    <Head>
      <title>Pista | {`${numMonth}/ ${numYear}`}</title>
      <meta
        name="description"
        content={`All events for ${numMonth} / ${numYear}`}
      />
    </Head>
  );

  // if (!filterData) {
  //   return <p className="center">Loading ...</p>;
  // }

  const filteredEvents = props.events;

  if (props.hasError) {
    <>
    {pageHeadeData}
      <p className="center"> Invalid Filter. Please adjust iyour values!</p>
      <div className="center">
        <Button link="/events"> Show All events</Button>
      </div>
    </>;
  }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth > 12 ||
  //   numMonth < 1
  // ) {
  //   return (
  //     <>
  //       <p className="center"> Invalid Filter. Please adjust iyour values!</p>
  //       <div className="center">
  //         <Button link="/events"> Show All events</Button>
  //       </div>
  //     </>
  //   );
  // }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
      {pageHeadeData}
        <p className="center">No Eventa Found for the Chosen Filter!</p>;
        <div className="center">
          <Button link="/events"> Show All events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      {pageHeadeData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSidePorps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const pageHeadeData = (
    <Head>
      <title>Pista | {`${numMonth}/ ${numYear}`}</title>
      <meta
        name="description"
        content={`All events for ${numMonth} / ${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      // notFound : true  =====> One way
      // redirect:{
      //   destination : './error' ====> Two Way
      // }

      // ====> three Way
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
