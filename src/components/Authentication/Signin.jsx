import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import nigerianFlag from "../../Images/nigerian flag.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInErrorMessage, setSignInErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Use navigate as a function
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true);
    setSignInErrorMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error(error.message);

      if (!email.includes("@")) {
        setSignInErrorMessage("Please enter a valid email address.");
        return;
      }

      const user = data.user;
      if (user) {
        console.log("Sign-in successful");
        console.log("User Metadata:", user.user_metadata);

        // Example: Access specific fields from user_metadata
        const firstname = user.user_metadata?.firstname || "N/A";
        const politicalparty = user.user_metadata?.politicalparty || "N/A";

        console.log(`First Name: ${firstname}`);
        console.log(`Political Party: ${politicalparty}`);

        // Redirect to the voting dashboard
        navigate("/Presidential-voting-dashboard");
      } else {
        throw new Error("Unable to retrieve user information.");
      }

      if (error) {
        if (error.status === 400) {
          throw new Error("Invalid email or password.");
        } else if (error.status === 409) {
          throw new Error("User already exists.");
        } else {
          throw new Error("An unexpected error occurred.");
        }
      }
    } catch (error) {
      setSignInErrorMessage(
        error.message || "Something went wrong. Please try again."
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
          <div
            className="col-md-6"
            style={{
              margin: "0px auto",
              padding: "180px 180px",
              backgroundColor: "rgb(244, 244, 244)",
              height: "100vh",
            }}
          >
            <h1 className="signin">Sign In</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
              className="form-width"
            >
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
              <p className="text-end">
                Forgot password?{" "}
                <Link to="/Auth/Resetpassword">Reset here</Link>
              </p>
              <button type="submit" className="form-submit">
                Sign In
              </button>
            </form>

            <p className="account-status">
              Don&apos;t have an account? <Link to="/Auth/Signup">Sign up</Link>
            </p>

            {signInErrorMessage && (
              <p style={{ color: "red" }}>{signInErrorMessage}</p>
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
                  We are the future. Make your vote count by voting for the
                  candidate of your choice.
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

export default SignIn;
