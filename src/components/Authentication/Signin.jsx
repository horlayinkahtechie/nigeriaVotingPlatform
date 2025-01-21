import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import nigerianFlag from "../../Images/nigerian flag.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInErrorMessage, setSignInErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Use navigate as a function
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        // console.log("User Metadata:", user.user_metadata);

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
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(244, 244, 244)" }}
      >
        <div className="row">
          <div className="col-md-6 form-login">
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

              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="clear-btn"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </button>
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
                className="img-fluid img-style"
                alt="Nigerian flag"
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
