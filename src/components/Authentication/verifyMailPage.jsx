import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function VerifyMailPage() {
  return (
    <>
      <Sidebar />
      <p
        style={{
          color: "green",
          marginTop: "150px",
          fontSize: "23px",
          textAlign: "center",
        }}
      >
        Verification mail sent, verify your email and{" "}
        <Link to="/Auth/login">Log in</Link>
      </p>
    </>
  );
}
