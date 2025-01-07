import { Link } from "react-router-dom";
function verifyMailPage() = {
    return (
        <div>
            <p style={{color: "green"}}>Verify your email and <Link to="/Auth/Login">Log in</Link></p>
        </div>
    )
}

export default verifyMailPage;