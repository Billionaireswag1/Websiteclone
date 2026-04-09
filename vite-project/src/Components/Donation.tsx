import "./Donation.css";

/**
 * Donation Section
 * Simple call-to-action encouraging users to support the platform
 */

export default function Donation() {
  return (
    <section className="donation-section">

      {/* Card container */}
      <div className="donation-card">

        {/* Heading */}
        <h2 className="donation-title">
          Season's Greetings from the freeCodeCamp community 🎉
        </h2>

        {/* Supporting message */}
        <p className="donation-text">
          If you're getting a lot out of freeCodeCamp, now is a great time
          to donate to support our charity's mission.
        </p>

        {/* Divider */}
        <hr className="donation-divider" />

        {/* Centered button */}
        <div className="donation-button-wrapper">
          <button className="donation-button">
            Donate
          </button>
        </div>

      </div>
    </section>
  );
}