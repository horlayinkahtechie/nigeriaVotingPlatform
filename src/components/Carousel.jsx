import { Link } from "react-router-dom";
function Carousel() {
  return (
    <div
      className="container-fluid carousel-color"
      style={{ height: "100vh", wdith: "100vw" }}
    >
      <div className="col-md-12 carousel">
        <h3 className="carousel-headings">Cast Your Vote!</h3>
        <p className="carousel-p">
          Your voice is powerful, and every vote matters. By casting your
          ballot, you are shaping the future, holding leaders accountable, and
          standing up for the issues that affect your life and community
        </p>
        <button type="button" className="carousel-vote-button">
          <Link
            to="/presidential-voting-dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            VOTE NOW
          </Link>
        </button>
        <button type="button" className="carousel-login-button">
          <Link
            to="/Auth/login"
            style={{ textDecoration: "none", color: "green" }}
          >
            LOG IN
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
