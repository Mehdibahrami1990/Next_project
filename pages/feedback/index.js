import { buildFeedbackPath, extractFeedbaback } from "../api/feedback";
import { useState } from "react";

function FeedbackPage(props) {
  const [feedBackData, setFeedBackData] = useState();
  function loadfeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedBackData(data.feedback);
      });
  }

  return (
    <>
      {feedBackData && <p>{feedBackData.email}</p>}
      <ul className="feedback">
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadfeedbackHandler.bind(null, item.id)} className="btn">
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedbaback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
