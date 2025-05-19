import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
// import nigeriaStates from "../components/Nigeria states and local govt/nigeriastates.json";
import Footer from "../components/Footer";

const PresidentialVotingDashBoard = () => {
  const [isSearching, setIsSearching] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  // const [stateOfOrigin, setStateOfOrigin] = useState("");
  // const [stateOfResidence, setStateOfResidence] = useState("");

  const [stats, setStats] = useState({ totalVotes: 0, userVote: 0 });
  const [user, setUser] = useState(null);

  const [nin, setNin] = useState("");
  const [isNinVerified, setIsNinVerified] = useState(false);
  // const [ninVerificationMessage, setNinVerificationMessage] = useState("");

  const [vin, setVin] = useState("");
  const [isVinVerified, setIsVinVerified] = useState(false);
  // const [showVinError, setShowVinError] = useState(false);

  const [affirmationCheck1, setAffirmationCheck1] = useState("");
  const [affirmationCheck2, setAffirmationCheck2] = useState("");
  const [affirmationCheck3, setAffirmationCheck3] = useState("");

  const [voteStatus, setVoteStatus] = useState("");
  const [voteSubmit, setVoteSubmit] = useState(false);

  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error.message);
        // navigate("/login");
      } else if (user) {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const searchFunc = (e) => {
    e.preventDefault();
    setNin("");
    setVin("");
    setAffirmationCheck1("");
    setAffirmationCheck2("");
    setAffirmationCheck3("");
    setIsNinVerified(false);
    setIsVinVerified(false);
    // setNinVerificationMessage("");
    setVoteStatus("No vote yet");
    setVoteSubmit(false);
  };

  // const handleVinVerification = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (vin === "345678910") {
  //       setIsVinVerified(true);
  //       console.log("VIN Verified");
  //     } else if (vin === "") {
  //       setIsVinVerified(false);
  //       console.log("Empty input");
  //     } else {
  //       setIsVinVerified(false);
  //       console.log("VIN is incorrect");

  //       // Display error for 2 seconds
  //       setShowVinError(true);
  //       setTimeout(() => {
  //         setShowVinError(false);
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     setIsVinVerified(false);
  //     // setVinVerificationMessage("Error verifying VIN.");
  //     console.error("Error Verifying VIN:", error);
  //   }
  // };

  // const handleNinVerification = async (e) => {
  //   setIsLoading(true);
  //   e.preventDefault();

  //   try {
  //     // Fetch the user's stored NIN from the database
  //     const { data: users, error } = await supabase
  //       .from("users")
  //       .select("*")
  //       .eq("nin", nin);

  //     if (error) {
  //       console.error("Error fetching user data:", error);
  //       setNinVerificationMessage(
  //         error.message || "Something went wrong while verifying your NIN."
  //       );
  //       setIsNinVerified(false);
  //       return;
  //     }

  //     if (!users || users.length === 0) {
  //       setIsNinVerified(false);
  //       throw new Error("No user found with the provided NIN.");
  //     }

  //     const user = users[0];
  //     console.log(user);
  //     const storedNin = user.nin;
  //     console.log("Stored NIN:", storedNin);

  //     const sanitizedNin = nin.trim();
  //     console.log("Input NIN:", sanitizedNin);

  //     if (sanitizedNin == storedNin) {
  //       setIsNinVerified(true);
  //       setNinVerificationMessage("Your NIN has been Verified");
  //       console.log("NIN Verified!");
  //     } else {
  //       setIsNinVerified(false);
  //       setNinVerificationMessage("NIN does not match.");
  //       console.log("NIN is incorrect.");

  //       setTimeout(() => {
  //         setIsNinVerified(false); // Re-enable the button
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     console.error("Error during NIN verification:", error);
  //     setNinVerificationMessage(error.message || "Error verifying NIN.");
  //     setIsNinVerified(false);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleCheckBox1 = (e) => {
    setAffirmationCheck1(e.target.checked);
  };

  const handleCheckBox2 = (e) => {
    setAffirmationCheck2(e.target.checked);
  };

  const handleCheckBox3 = (e) => {
    setAffirmationCheck3(e.target.checked);
  };

  const fetchStats = async () => {
    try {
      const { count: totalVotes, error: voteError } = await supabase
        .from("votes")
        .select("id", { count: "exact" });

      if (voteError) throw voteError;

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;

      // Check if the authenticated user has voted
      const { data: userVote, error: userVoteError } = await supabase
        .from("votes")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (userVoteError && userVoteError.code !== "PGRST116")
        throw userVoteError;

      return {
        totalVotes: totalVotes || (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ),
        userVote: userVote ? 1 : 0,
      };
    } catch (err) {
      console.error("Error fetching stats:", err.message);
      return {
        totalVotes: 0,
        hasUserVoted: 0,
      };
    }
  };

  useEffect(() => {
    const loadStats = async () => {
      setIsLoading(true);
      const fetchedStats = await fetchStats();
      setStats(fetchedStats);
      setIsLoading(false);
      console.log(fetchedStats);
    };

    loadStats();
  }, []);

  //Fetching users name to add the user dashboard name
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) throw error;
        setUser(user);
      } catch (err) {
        console.error("Error fetching user:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const submitFunc = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setVoteSubmit(false);
    setError("");

    try {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        throw new Error("Unable to fetch authenticated user.");
      }

      const user = data.user;
      const { error: insertError } = await supabase.from("votes").insert([
        {
          firstName,
          lastName,
          otherName,
          phoneno,
          // stateOfResidence,
          // stateOfOrigin,
          dob,
          vin,
          nin,
          politicalparty: isSearching.toUpperCase(),
          email,
          user_id: user.id,
        },
      ]);

      if (insertError) throw insertError;

      setVoteStatus("Your vote has been submitted successfully!");
      setVoteSubmit(true);
    } catch (error) {
      setError(error.message || "An error occurred while submitting.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="container-fluid section-color"
        style={{ paddingBottom: "30px" }}
      >
        <h3 className="voting-dashBoard-heading">
          Welcome,{" "}
          {user && user.user_metadata.username
            ? user.user_metadata.username
            : " User"}
        </h3>
        <p className="voting-dashBoard-p">
          Search the department of the candidate you want to vote for.
        </p>

        <form
          onSubmit={searchFunc}
          action=""
          className="party-input"
          style={{}}
        >
          <input
            type="text"
            onChange={(e) => setIsSearching(e.target.value)}
            value={isSearching}
            className="form-control form-control-lg political-party-search"
            placeholder="Search the department of your candidate. E.g Computer Science"
          />

          <button
            type="submit"
            className="btn btn-outline-success"
            style={{
              borderRadius: "0px",
              border: "none",
              outline: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </div>

      {!isSearching && (
        <div
          className="container-fluid section-color"
          style={{ paddingTop: "0px" }}
        >
          <div className="row p-2">
            <div className="col-md-3 card">
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up analytics-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </div>
                <div className="mt-2">
                  <p className="text-center analytics-heading">Total votes</p>
                </div>
              </div>

              <p className="total-votes-p">Total votes</p>
              {loading ? (
                <p style={{ textAlign: "start" }}>
                  <div className="d-flex mt-3">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              ) : (
                <p className="total-votes-heading">{stats.totalVotes}</p>
              )}
            </div>
            <div className="col-md-3 card">
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-check analytics-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>
                </div>
                <div className="mt-2">
                  <p className="text-center analytics-heading">Total Users</p>
                </div>
              </div>
              <p className="total-votes-p">No of Authenticated users</p>
              {/* <p className="total-votes-heading">1</p> */}
              {loading ? (
                <p style={{ textAlign: "start" }}>
                  {" "}
                  <div className="d-flex mt-3">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              ) : (
                <p className="total-votes-heading">{stats.totalUsers}</p>
              )}
            </div>
            <div className="col-md-3 card">
              <div style={{ display: "flex", gap: "20px" }}>
                <div className="col-md-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up analytics-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </div>
                <div className="col-md-6 mt-2">
                  <p className="text-center analytics-heading">Your votes</p>
                </div>
              </div>
              <p className="total-votes-p">Your total vote count</p>
              {loading ? (
                <p style={{ textAlign: "start" }}>
                  {" "}
                  <div className="d-flex mt-3">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              ) : (
                <p className="total-votes-heading">{stats.userVote}</p>
              )}
            </div>
            <div className="col-md-3 card">
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-building-check analytics-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z" />
                    <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                  </svg>
                </div>
                <div className="mt-2">
                  <p className="text-center analytics-heading">
                    Participating Dept
                  </p>
                </div>
              </div>
              <p className="total-votes-p">No of participating dept</p>
              <p className="total-votes-heading">3</p>
            </div>
          </div>
        </div>
      )}

      {isSearching === "Computer Science" && (
        <div
          className="container-fluid section-color voting-form-padding"
          style={{ paddingTop: "30px" }}
        >
          <h3 className="pdp-voting-page-heading">
            {isSearching.toUpperCase()} Voting Page
          </h3>
          <p className="pdp-voting-page-p">
            Welcome to {isSearching.toUpperCase()} Voting page. Input your
            details and verify before submitting.{" "}
          </p>

          <form action="" onSubmit={submitFunc}>
            <h3 className="voting-detials-form mt-5">Personal Information</h3>

            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control form-width-height"
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setOtherName(e.target.value)}
                  placeholder="Other name"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Date of Birth"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail Address"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            {/* <h3 className="residential-information">Residential Information</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfOrigin(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of origin</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfResidence(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of Residence</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}

            <h3 className="verification-information">
              Verification Information
            </h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  value={nin}
                  type="number"
                  placeholder="Matric No"
                  className="form-control form-width-height"
                  name=""
                  onChange={(e) => setNin(e.target.value)}
                />

                {/* {isNinVerified === false && (
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      border: "none",
                      padding: "10px 20px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleNinVerification}
                  >
                    Verify NIN
                  </button>
                )}

                {loading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {ninVerificationMessage && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    {ninVerificationMessage}
                  </p>
                )} */}
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  type="text"
                  placeholder="Your Department"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {/* {showVinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    VIN is Incorrect
                  </p>
                ) : isVinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your VIN has been verified!
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleVinVerification}
                  >
                    Verify
                  </a>
                )} */}
              </div>
            </div>

            <h3 className="vote-confirmation">Vote Confirmation</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  readOnly
                  value={isSearching.toUpperCase()}
                  placeholder={isSearching.toUpperCase()}
                  className="form-control form-width-height"
                  name="party"
                  id="party"
                />
              </div>
            </div>

            <div className="form-verification-checkmark">
              <label>
                <input
                  required
                  checked={affirmationCheck1}
                  onChange={handleCheckBox1}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that all information provided are 100% true.
              </label>

              <label>
                <input
                  required
                  checked={affirmationCheck2}
                  onChange={handleCheckBox2}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I am 100% sure I selected my preferred department
                to vote for.
              </label>
              <label>
                <input
                  required
                  checked={affirmationCheck3}
                  onChange={handleCheckBox3}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I have cross-checked all information provided and
                ready to vote.
              </label>
            </div>

            <button
              type="submit"
              disabled={
                voteSubmit ||
                !affirmationCheck1 ||
                !affirmationCheck2 ||
                !affirmationCheck3
              }
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-outline-success vote-submit mt-5"
              style={{ fontSize: "19.5px" }}
            >
              {voteSubmit ? "Vote Submitted" : "Vote"}
            </button>
          </form>
        </div>
      )}

      {isSearching === "Information System Science" && (
        <div
          className="container-fluid section-color voting-form-padding"
          style={{ paddingTop: "30px" }}
        >
          <h3 className="pdp-voting-page-heading">
            {isSearching.toUpperCase()} Voting Page
          </h3>
          <p className="pdp-voting-page-p">
            Welcome to {isSearching.toUpperCase()} Voting page. Input your
            details and verify before submitting.{" "}
          </p>

          <form action="" onSubmit={submitFunc}>
            <h3 className="voting-detials-form mt-5">Personal Information</h3>

            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control form-width-height"
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setOtherName(e.target.value)}
                  placeholder="Middle name"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Date of Birth"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail Address"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            {/* <h3 className="residential-information">Residential Information</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfOrigin(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of Origin</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfResidence(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of Residence</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}

            <h3 className="verification-information">
              Verification Information
            </h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  value={nin}
                  type="number"
                  placeholder="Matric No"
                  className="form-control form-width-height"
                  name=""
                  onChange={(e) => setNin(e.target.value)}
                />

                {/* {isNinVerified === false && (
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      border: "none",
                      padding: "10px 20px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleNinVerification}
                  >
                    Verify NIN
                  </button>
                )}

                {loading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {ninVerificationMessage && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    {ninVerificationMessage}
                  </p>
                )} */}
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  type="text"
                  placeholder="Your Department"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {/* {showVinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    VIN is Incorrect
                  </p>
                ) : isVinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your VIN has been verified!
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleVinVerification}
                  >
                    Verify
                  </a>
                )} */}
              </div>
            </div>

            <h3 className="vote-confirmation">Vote Confirmation</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  value={isSearching.toUpperCase()}
                  readOnly
                  className="form-control form-width-height"
                  name="Party"
                  id="Party"
                />
              </div>
            </div>

            <div className="form-verification-checkmark">
              <label>
                <input
                  checked={affirmationCheck1}
                  required
                  onChange={handleCheckBox1}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that all information provided are 100% true.
              </label>

              <label>
                <input
                  checked={affirmationCheck2}
                  onClick={handleCheckBox2}
                  required
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I am 100% sure I selected my preferred department
                to vote for
              </label>
              <label>
                <input
                  required
                  checked={affirmationCheck3}
                  onClick={handleCheckBox3}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I have cross-checked all information provided and
                ready to vote.
              </label>
            </div>

            <button
              type="submit"
              // onClick={submitFunc}
              disabled={
                voteSubmit ||
                !affirmationCheck1 ||
                !affirmationCheck2 ||
                !affirmationCheck3
              }
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-outline-success vote-submit mt-5"
              style={{ fontSize: "19.5px" }}
            >
              {voteSubmit ? "Vote Submitted" : "Vote"}
            </button>
          </form>
        </div>
      )}

      {isSearching === "Cyber Security" && (
        <div
          className="container-fluid section-color voting-form-padding"
          style={{ paddingTop: "30px" }}
        >
          <h3 className="pdp-voting-page-heading">
            {isSearching.toUpperCase()} Voting Page
          </h3>
          <p className="pdp-voting-page-p">
            Welcome to {isSearching.toUpperCase()} Voting page. Input your
            details and verify before submitting.{" "}
          </p>

          <form action="" onSubmit={submitFunc}>
            <h3 className="voting-detials-form mt-5">Personal Information</h3>

            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control form-width-height"
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setOtherName(e.target.value)}
                  placeholder="Middle name"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Date of Birth"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail Address"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            {/* <h3 className="residential-information">Residential Information</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfOrigin(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of Origin</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setStateOfResidence(e.target.value)}
                  className="form-control form-width-height"
                >
                  <option value="">State of Residence</option>
                  {nigeriaStates.map((stateObj, index) => (
                    <option key={index} value={stateObj.state}>
                      {stateObj.state}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}

            <h3 className="verification-information">
              Verification Information
            </h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  value={nin}
                  type="number"
                  placeholder="Matric No"
                  className="form-control form-width-height"
                  name=""
                  onChange={(e) => setNin(e.target.value)}
                />

                {/* {isNinVerified === false && (
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      border: "none",
                      padding: "10px 20px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleNinVerification}
                  >
                    Verify NIN
                  </button>
                )}

                {loading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {ninVerificationMessage && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    {ninVerificationMessage}
                  </p>
                )} */}
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  type="text"
                  placeholder="Your Department"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {/* {showVinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    VIN is Incorrect
                  </p>
                ) : isVinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your VIN has been verified!
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleVinVerification}
                  >
                    Verify
                  </a>
                )} */}
              </div>
            </div>

            <h3 className="vote-confirmation">Vote Confirmation</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  value={isSearching.toUpperCase()}
                  readOnly
                  className="form-control form-width-height"
                  name="Party"
                  id="Party"
                />
              </div>
            </div>

            <div className="form-verification-checkmark">
              <label>
                <input
                  checked={affirmationCheck1}
                  required
                  onChange={handleCheckBox1}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that all information provided are 100% true.
              </label>

              <label>
                <input
                  checked={affirmationCheck2}
                  onChange={handleCheckBox2}
                  required
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I am 100% sure I selected my preferred department
                to vote for
              </label>
              <label>
                <input
                  required
                  checked={affirmationCheck3}
                  onChange={handleCheckBox3}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I have cross-checked all information provided and
                ready to vote.
              </label>
            </div>

            <button
              type="submit"
              // onClick={submitFunc}
              disabled={
                voteSubmit ||
                !affirmationCheck1 ||
                !affirmationCheck2 ||
                !affirmationCheck3
              }
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-outline-success vote-submit mt-5"
              style={{ fontSize: "19.5px" }}
            >
              {voteSubmit ? "Vote Submitted" : "Vote"}
            </button>
          </form>
        </div>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header" style={{ border: "none" }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ padding: "70px 40px" }}>
              {voteSubmit && (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="85"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                    style={{ color: "green" }}
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                  </svg>
                  <p style={{ color: "green", fontSize: "20px" }}>
                    {voteStatus}
                  </p>
                </div>
              )}

              {error && (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="85"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    style={{ color: "red" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                  <p style={{ color: "red", fontSize: "20px" }}>{error}</p>
                </div>
              )}
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PresidentialVotingDashBoard;
