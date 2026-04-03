import "./Welcome.css";
export default function Welcome() {
  return (
    // Main section container for the welcome content
    <section className="welcome-section">

      {/* Page welcome heading */}
      <h1 className="welcome-title">
        Welcome to freeCodeCamp.org
      </h1>

      {/* Quote block container */}
      <div className="welcome-quote-block">

        {/* Quote text */}
        <p className="welcome-quote">
          "By seeking and blundering we learn."
        </p>

        {/* Quote author */}
        <p className="welcome-author">
          — Johann Wolfgang von Goethe
        </p>

      </div>
    </section>
  );
}
