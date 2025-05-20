import { Link } from "react-router-dom";
// import CoatOfArm from "../Images/Nigeria coat of arm.jfif";

export default function Footer() {
  return (
    <footer
      className="container-fluid footer-padding"
      style={{ backgroundColor: "rgb(45, 45, 73)" }}
    >
      {/* <img
        src={CoatOfArm}
        style={{ width: "90px", height: "90px" }}
        alt="coatOfArm"
      /> */}
      <div className="row mt-4 footer-inner-padding">
        <div className="col-md-4">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="links">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/how-to-vote">
                How to vote
              </Link>
            </li>
            <li>
              <Link className="link" to="/fci-voting-dashboard">
                Voting Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="/fci-voting-dashboard">
                Results
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <h3 className="footer-heading">LEGAL AND COMPLIANCE</h3>
          <p className="disclaimers">
            <b>Disclaimer:</b> This student voting system is Designed and
            Developed by Ridwan Akorede Ogunshola Beware of copyright
            violations.
          </p>

          <p className="disclaimers">
            This platform adheres to accessibility standards to ensure all fci
            students can participate.
          </p>
        </div>
        <div className="col-md-12 copyright">
          © 2025 Student Voting System. All rights reserved. Design and
          Developed by Ridwan Akorede Ogunshola
        </div>
      </div>
    </footer>
  );
}
