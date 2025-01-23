import AbujaArialView from "../Images/Abuja.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Presidential() {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img
            src={AbujaArialView}
            className="d-block w-100 img-fluid carousel-image"
            alt="Abuja view"
            loading="lazy"
          />
          <div className="carousel-caption section">
            <h5 className="carousel-heading">Presidential Election</h5>
            <h5 className="carousel-description">
              Verify your Identity, select your Preferred Candidate, and vote!
            </h5>
            <button type="button" className="carousel-vote-button">
              <Link
                to="/presidential-voting-dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                VOTE NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid section-color">
        <h3 className="presidential-candidate-heading">
          Presidential candidates
        </h3>
        <p className="presidential-candidate-p">
          Hover on the candidate Image to check candidates political party,
          mission and vision.
        </p>

        <APCPresidentialCandidateDetails />

        <p style={{ marginTop: "50px", fontSize: "23px" }}>
          Check out APC Agenda/Manifesto{" "}
          <Link to="/APC Agenda/Manifesto">Here</Link>
        </p>

        <PDPPresidentialCandidateDetails />
      </div> */}

      <div className="container-fluid section-color">
        <h3 className="how-to-vote-heading">How to vote</h3>
        <p className="how-to-vote-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          illo!
        </p>

        <div className="how-to-vote-padding">
          <h3 className="steps" style={{ marginTop: "10px" }}>
            Step 1
          </h3>
          <div className="col-md-12 steps-background-color">
            Log in to your portal, you can log in from the home page or the side
            bar.
          </div>

          <h3 className="steps">Step 2</h3>
          <div className="col-md-12 steps-background-color">
            After you log in, go to the voting DashBoard and search for the
            political party you want to vote for.
          </div>

          <h3 className="steps">Step 3</h3>
          <div className="col-md-12 steps-background-color">
            Fill in the form, depending on the political party you choose. Make
            sure you verify your VIN and NIN before submitting.
          </div>

          <h3 className="steps">Step 4</h3>
          <div className="col-md-12 steps-background-color">
            You receive a notification that your vote has been count.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
