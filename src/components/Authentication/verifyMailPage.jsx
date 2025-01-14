import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function verifyMailPage() {
  return (
    <>
      <Sidebar />
      <p style={{ color: "green" }}>
        Verify your email and <Link to="/Auth/login">Log in</Link>
      </p>
    </>
  );
}
