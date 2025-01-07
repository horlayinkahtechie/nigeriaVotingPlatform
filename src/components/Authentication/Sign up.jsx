import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import nigerianFlag from "../../Images/nigerian flag.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setIsLoading(true);
    setSignUpErrorMessage("");

    // Validation
    if (!email.includes("@")) {
      setSignUpErrorMessage("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setSignUpErrorMessage("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      if (error) throw new Error(error.message);

      // Success - Redirect to verify page
      navigate("/verifyMailPage");
    } catch (error) {
      setSignUpErrorMessage(
        error.message || "An error occurred during sign-up."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img
                src={nigerianFlag}
                className="img-fluid"
                alt="Nigerian flag"
                style={{ height: "100vh" }}
              />
              <div className="carousel-caption">
                <h5 className="carousel-heading">Remember,</h5>
                <h5 className="carousel-description">
                  We are the future. Make your vote count by voting for the
                  candidate of your choice.
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              margin: "0px auto",
              padding: "180px 180px",
              backgroundColor: "rgb(244, 244, 244)",
              height: "100vh",
            }}
          >
            <h1 className="signup">Sign Up</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
            >
              <div>
                <input
                  className="form-input form-control"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className="form-input form-control"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className="form-input form-control"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="form-submit"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>

            <p className="account-status">
              Already have an account? <Link to="/Auth/Login">Sign In</Link>
            </p>

            {signUpErrorMessage && (
              <p style={{ color: "red" }}>{signUpErrorMessage}</p>
            )}
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img
                src={nigerianFlag}
                className="img-fluid"
                alt="Nigerian flag"
                style={{ height: "100vh" }}
              />
              <div className="carousel-caption">
                <h5 className="carousel-heading">Remember,</h5>
                <h5 className="carousel-description">
                  We are the future, make your vote count.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
