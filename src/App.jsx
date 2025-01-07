import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./styles/App.css";

import Presidential from "./pages/Presidential";
import Index from "./pages/Index";
import SignUp from "./components/Authentication/Sign up";
import SignIn from "./components/Authentication/Signin";
// import resetYourPassword from "./components/Authentication/ResetPassword";
import ResetPassword from "./components/Authentication/resetPassword";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import PresidentialVotingDashBoard from "./pages/Presidential-voting-dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    }

    fetchSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "200px" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Sidebar user={user} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Auth/signup" element={<SignUp />} />
        <Route path="/Auth/login" element={<SignIn />} />
        <Route path="/how-to-vote" element={<Presidential />} />
        <Route path="/Auth/resetpassword" element={<ResetPassword />} />

        {/* Protected Route */}
        <Route
          path="/presidential-voting-dashboard"
          element={
            <ProtectedRoute user={user}>
              <PresidentialVotingDashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
