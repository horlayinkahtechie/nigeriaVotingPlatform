import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    setSignUpErrorMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw new Error(error.message);

      if (!email.includes("@")) {
        setSignUpErrorMessage("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setSignUpErrorMessage("Password must be at least 6 characters long.");
        return;
      }
      console.log("Sign-up successful:", data);
      alert("Sign-up successful! Please check your email for verification.");
      // navigate("/welcome"); // Uncomment if you have a post-sign-up page
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
      <div
        className="container-fluid"
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div className="row" style={{ margin: "40px auto" }}>
          <div className="col-md-6">
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
              <button type="submit" className="form-submit">
                Sign Up
              </button>
            </form>

            <p className="account-status">
              Already have an account <Link to="/Auth/Login">Sign In</Link>
            </p>

            {signUpErrorMessage && (
              <p style={{ color: "red" }}>{signUpErrorMessage}</p>
            )}
            {isLoading && <p style={{ color: "green" }}>Signing up...</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
