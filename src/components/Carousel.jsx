import { Link } from "react-router-dom";
function Carousel() {
  return (
    <div className="carousel">
      <h3 className="carousel-headings" style={{ color: "white" }}>
        Cast Your Vote!
      </h3>
      <p className="carousel-p" style={{ color: "white" }}>
        Your voice is powerful, and every vote matters. By casting your ballot,
        you are shaping the future, holding leaders accountable, and standing up
        for the issues that affect your life and community
      </p>
      <div className="display-flex">
        <button
          type="button"
          className="carousel-vote-button"
          style={{ backgroundColor: "rgb(27, 27, 39)" }}
        >
          <Link
            to="/fci-voting-dashboard"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            VOTE NOW
          </Link>
        </button>
        <button type="button" className="carousel-login-button">
          <Link
            to="/Auth/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            LOG IN
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
