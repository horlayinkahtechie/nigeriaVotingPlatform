import { useState } from "react";
import supabase from "../../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import nigerianFlag from "../../Images/nigerian flag.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [nin, setNin] = useState("");
  const [showNinError, setShowNinError] = useState(false);
  const [isNinVerified, setIsNinVerified] = useState(false);

  const [password, setPassword] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordWeak, setPasswordWeak] = useState("");
  const [passwordOkay, setPasswordOkay] = useState("");
  const [passwordStrong, setPasswordStrong] = useState("");

  const navigate = useNavigate();

  const handleNinVerification = async (e) => {
    e.preventDefault();
    try {
      if (nin === "123456789") {
        setIsNinVerified(true);
        // setNinVerificationMessage("Verified");
        console.log("NIN Verified!");
      } else if (nin === "") {
        setIsNinVerified(false);
        // setNinVerificationMessage("Not Verified");
        console.log("Empty input");
      } else {
        setIsNinVerified(false);
        // setNinVerificationMessage("Not Verified");
        console.log(isNinVerified);
        // console.log("NIN not verified");
        setIsNinVerified(false);
        // setNinVerificationMessage("Not Verified");
        console.log("NIN is incorrect");

        // Display error for 2 seconds
        setShowNinError(true);
        setTimeout(() => {
          setShowNinError(false);
        }, 2000);
      }
    } catch (error) {
      // setNinVerificationMessage("Error verifying NIN.", error);
      console.log(error, "Error verifying NIN");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = () => {
    if (password.length < 6) {
      setPasswordWeak(<div className="password-weak"></div>);
      setPasswordStrength(
        <p style={{ color: "red" }}>Your password is too short</p>
      );
    } else if (!/\d/.test(password)) {
      setPasswordOkay(<div className="password-okay"></div>);
      setPasswordStrength(
        <p style={{ color: "red" }}>
          Your password must include at least one number
        </p>
      );
    } else {
      setPasswordStrong(<div className="password-strong"></div>);
      setPasswordStrength("Your password is strong");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength();
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    setSignUpErrorMessage("");

    try {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              nin,
            },
          },
        });

      if (signUpError) {
        throw new Error(signUpError.message);
      }

      if (signUpData.user) {
        // Insert additional details into a custom table
        const { error: insertError } = await supabase
          .from("users")
          .insert([{ email, username, nin }]);

        if (insertError) {
          console.error("Insert Error:", insertError);
          throw new Error("Error storing additional user details.");
        }

        // Navigate to the verify email page
        navigate("/Auth/VerifyMailPage");
      }
    } catch (error) {
      console.error("Sign-Up Error:", error);
      setSignUpErrorMessage(
        error.message || "An error occurred during sign-up."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mobile-display-remove">
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
          <div className="col-md-6 form-login">
            <h1 className="signup">Sign Up</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
              className="form-width"
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
                  required
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                  type="number"
                  placeholder="National Identification Number (NIN)"
                  className="form-input form-control"
                  name=""
                />
                {showNinError ? (
                  <p style={{ color: "red", marginTop: "0px" }}>
                    NIN is Incorrect
                  </p>
                ) : isNinVerified ? (
                  <p style={{ color: "green", marginTop: "0px" }}>
                    Your NIN has been verified!
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "0px" }}
                    onClick={handleNinVerification}
                  >
                    Verify
                  </a>
                )}
              </div>
              <div>
                <div className="input-container mt-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input form-control"
                    placeholder="Enter a password"
                    value={password}
                    onChange={handlePasswordChange}
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
              </div>

              <div className="password-strength">
                {passwordWeak} {passwordOkay} {passwordStrong}
              </div>

              <div className="password-strength-messages">
                <p className="password-strength-message">{passwordStrength}</p>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
