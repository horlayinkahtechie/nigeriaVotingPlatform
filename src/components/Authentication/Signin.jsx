import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInErrorMessage, setSignInErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      console.log("Sign-in successful:", data);
      // navigate("/dashboard");
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
            <h1 className="signin">Sign In</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
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
                Sign In
              </button>
            </form>

            <p className="account-status">
              Dont have an account? <Link to="/Auth/Signup">Sign up</Link>
            </p>

            {signInErrorMessage && (
              <p style={{ color: "red" }}>{signInErrorMessage}</p>
            )}
            {isLoading && <p style={{ color: "green" }}>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
}
