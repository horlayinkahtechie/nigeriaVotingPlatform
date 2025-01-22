import { Link } from "react-router-dom";
// import CoatOfArm from "../Images/Nigeria coat of arm.jfif";

export default function Footer() {
  return (
    <footer className="container-fluid bg-success footer-padding">
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
              <Link className="link" to="/presidential-voting-dashboard">
                Voting Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="/presidential-voting-dashboard">
                Results
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <h3 className="footer-heading">LEGAL AND COMPLIANCE</h3>
          <p className="disclaimers">
            <b>Disclaimer:</b> This voting system is Designed and Developed by
            Alao Abdul-salam Olayinka. Beware of copyright violations.
          </p>
          <p className="disclaimers">
            <b>Disclaimer:</b> This voting system is Designed and Developed by
            Alao Abdul-salam Olayinka. Beware of copyright violations.
          </p>
          <p className="disclaimers">
            <b>Disclaimer:</b> This voting system is authorized by the Electoral
            Commission of Nigeria. Ensure your information is accurate before
            submitting.
          </p>
          <p className="disclaimers">
            This platform adheres to accessibility standards to ensure all
            citizens can participate.
          </p>
        </div>
        <div className="col-md-12 copyright">
          © 2025 Presidential Voting System. All rights reserved. Design and
          Developed by Alao Abdul-salam Olayinka
        </div>
      </div>
    </footer>
  );
}
