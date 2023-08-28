import { useRef } from "react";

import classes from "./newsletter-registration.module.css";
function NewsletterRegistration() {
  const emailInutRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmal = emailInutRef.current.value;
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    fetch("/api/newsLetter", {
      metho: "POST",
      body: JSON.stringify({ email: enteredEmal }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            autoComplete="off"
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInutRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
