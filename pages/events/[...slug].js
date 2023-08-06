import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <p className="center"> Invalid Filter. Please adjust iyour values!</p>
        <div className="center">
          <Button link="/events"> Show All events</Button>
        </div>
      </>
    );
  }
  const filteredEcvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEcvents || filteredEcvents.length === 0) {
    return (
      <>
        <p className="center">No Eventa Found for the Chosen Filter!</p>;
        <div className="center">
          <Button link="/events"> Show All events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <EventList items={filteredEcvents} />
    </div>
  );
}

export default FilteredEventsPage;
