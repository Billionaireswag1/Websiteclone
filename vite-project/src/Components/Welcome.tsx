import "./Welcome.css";

export default function Welcome() {
  return (
    /* Main welcome section at the top of the page */
    <section className="welcome-section">

      {/* Main heading */}
      <h1 className="welcome-title">
        Welcome to freeCodeCamp.org
      </h1>

      {/* Quote + author block */}
      <div className="welcome-quote-block">

        {/* Inspirational quote */}
        <p className="welcome-quote">
          “The work of today is the history of tomorrow, and we are its makers.”
        </p>

        {/* Person who said the quote */}
        <p className="welcome-author">
          Juliette Gordon Low
        </p>

      </div>

    </section>
  );
}