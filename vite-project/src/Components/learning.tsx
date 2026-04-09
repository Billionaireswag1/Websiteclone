import "./Learning.css";
import {
  MonitorSmartphone,
  SquareTerminal,
  Atom,
  Database,
  Server,
  ListChecks,
  Calendar,
  Languages,
} from "lucide-react";

/**
 * Learning Section
 * ----------------
 * Displays recommended courses and resources.
 * Content is grouped into categories for easy navigation.
 */

const Learning: React.FC = () => {
  return (
    <section className="learning">
      
      {/* Section title */}
      <h2 className="learning-title">Recommended curriculum:</h2>

      {/* Core curriculum links */}
      <div className="learning-box">
        <MonitorSmartphone size={34} className="learning-icon" />
        <a href="#" className="learning-link">
          Responsive Web Design Certification
        </a>
      </div>

      <div className="learning-box">
        <SquareTerminal size={34} className="learning-icon" />
        <a href="#" className="learning-link">
          JavaScript Algorithms and Data Structures Certification
        </a>
      </div>

      <div className="learning-box">
        <Atom size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Front End Development Libraries Certification
        </a>
      </div>

      <div className="learning-box">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Python Certification
        </a>
      </div>

      <div className="learning-box">
        <Database size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Relational Databases Certification
        </a>
      </div>

      <div className="learning-box">
        <Server size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Back End Development and APIs Certification
        </a>
      </div>

      {/* Highlighted path */}
      <div className="learning-box learning-box--highlight">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Certified Full-Stack Developer Curriculum
        </a>
      </div>

      {/* Daily challenge */}
      <h3 className="learning-subtitle">
        Try the coding challenge of the day:
      </h3>

      <div className="learning-box">
        <ListChecks size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Go to Today&apos;s Challenge
        </a>
      </div>

      <div className="learning-box">
        <Calendar size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Go to Daily Coding Challenge Archive
        </a>
      </div>

      {/* English courses */}
      <h3 className="learning-subtitle">Learn English for Developers:</h3>

      <div className="learning-box">
        <Languages size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          A2 English for Developers Certification (Beta)
        </a>
      </div>

      <div className="learning-box">
        <Languages size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          B1 English for Developers Certification (Beta)
        </a>
      </div>

      {/* Spanish course */}
      <h3 className="learning-subtitle">Learn Professional Spanish:</h3>

      <div className="learning-box">
        <Languages size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          A1 Professional Spanish Certification (Beta)
        </a>
      </div>

      {/* Chinese course */}
      <h3 className="learning-subtitle">Learn Professional Chinese:</h3>

      <div className="learning-box">
        <Languages size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          A1 Professional Chinese Certification (Beta)
        </a>
      </div>

      {/* Interview prep */}
      <h3 className="learning-subtitle">
        Prepare for the developer interview job search:
      </h3>

      <div className="learning-box">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          The Odin Project - freeCodeCamp Remix
        </a>
      </div>

      <div className="learning-box">
        <ListChecks size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Coding Interview Prep
        </a>
      </div>

      <div className="learning-box">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Project Euler
        </a>
      </div>

      <div className="learning-box">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Rosetta Code
        </a>
      </div>

      {/* Professional certifications */}
      <h3 className="learning-subtitle">Professional certifications:</h3>

      <div className="learning-box">
        <SquareTerminal size={32} className="learning-icon" />
        <a href="#" className="learning-link">
          Free Foundational C# with Microsoft Certification
        </a>
      </div>

      {/* Footer note */}
      <p className="learning-note">
        Looking for older coursework?{" "}
        <a href="#">Check out our archive page.</a>
      </p>
    </section>
  );
};

export default Learning;