import "./Footer.css";

export default function Footer() {
  return (
    <footer className="fcc-footer">
      <div className="footer-container">

        {/* Left side: who we are + mission */}
        <div className="footer-left">
          <p>
            freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable
            organization (United States Federal Tax Identification Number:
            82-0779546).
          </p>

          <p>
            <strong>Our mission:</strong> to help people learn to code for free.
            We accomplish this by creating thousands of videos, articles, and
            interactive coding lessons — all freely available to the public.
          </p>

          <p>
            Donations to freeCodeCamp go toward our education initiatives, and
            help pay for servers, services, and staff.
          </p>

          <p>
            You can{" "}
            <a href="#" className="donate-link">
              make a tax-deductible donation here.
            </a>
          </p>
        </div>

        {/* Right side: trending guide links */}
        <div className="footer-right">
          <h3 className="footer-heading">Trending Guides</h3>

          <div className="footer-grid">
            <ul>
              {/* list of popular topics */}
              <li><a href="#">REST APIs</a></li>
              <li><a href="#">Clean Code</a></li>
              <li><a href="#">TypeScript</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">AI Chatbots</a></li>
              <li><a href="#">Command Line</a></li>
              <li><a href="#">GraphQL APIs</a></li>
              <li><a href="#">CSS Transforms</a></li>
              <li><a href="#">Access Control</a></li>
              <li><a href="#">REST API Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Linux</a></li>
              <li><a href="#">React</a></li>
              <li><a href="#">CI/CD</a></li>
              <li><a href="#">Docker</a></li>
              <li><a href="#">Golang</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Node.js</a></li>
              <li><a href="#">Todo APIs</a></li>
              <li><a href="#">JavaScript Classes</a></li>
              <li><a href="#">Front-End Libraries</a></li>
              <li><a href="#">Express and Node.js</a></li>
              <li><a href="#">Python Code Examples</a></li>
              <li><a href="#">Clustering in Python</a></li>
              <li><a href="#">Software Architecture</a></li>
              <li><a href="#">Programming Fundamentals</a></li>
              <li><a href="#">Coding Career Preparation</a></li>
              <li><a href="#">Full-Stack Developer Guide</a></li>
              <li><a href="#">Python for JavaScript Devs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section: apps + general site links */}
      <div className="footer-bottom">
        <h4>Mobile App</h4>

        <div className="footer-apps">
          <a className="app-btn" href="#">Download on the App Store</a>
          <a className="app-btn" href="#">Get it on Google Play</a>
        </div>

        {/* secondary navigation links */}
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Alumni Network</a></li>
          <li><a href="#">Open Source</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="#">Academic Honesty</a></li>
          <li><a href="#">Code of Conduct</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Copyright Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}