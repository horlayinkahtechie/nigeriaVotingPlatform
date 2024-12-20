import { useState } from "react";
import Sidebar from "../components/Sidebar";
import nigeriaStates from "../components/Nigeria states and local govt/nigeriastates.json";
// import { color } from "chart.js/helpers";

export default function PresidentialVotingDashBoard() {
  const [isSearching, setIsSearching] = useState("");
  const [voteSubmit, setVoteSubmit] = useState(false);

  const [nin, setNin] = useState("");
  const [isNinVerified, setIsNinVerified] = useState(false);
  const [ninVerificationMessage, setNinVerificationMessage] = useState("");
  const [showNinError, setShowNinError] = useState(false);

  const [vin, setVin] = useState("");
  const [isVinVerified, setIsVinVerified] = useState(false);
  const [vinVerificationMessage, setVinVerificationMessage] = useState("");
  const [showVinError, setShowVinError] = useState(false);

  const [affirmationCheck, setAffirmationCheck] = useState(false);
  // const [verificationResult, setVerificationResult] = useState("");
  const [voteStatus, setVoteStatus] = useState("");

  const searchFunc = (e) => {
    e.preventDefault();
    // console.log(isSearching);
    setNin("");
    setVin("");
    setAffirmationCheck(false);
    setIsNinVerified(false);
    setIsVinVerified(false);
    setNinVerificationMessage("");
    setVinVerificationMessage("");
    setVoteStatus("No vote yet");
  };

  const handleNinVerification = async (e) => {
    e.preventDefault();
    try {
      if (nin === "123456789") {
        setIsNinVerified(true);
        setNinVerificationMessage("Verified");
        console.log("NIN Verified!");
      } else if (nin === "") {
        setIsNinVerified(false);
        setNinVerificationMessage("Not Verified");
        console.log("Empty input");
      } else {
        setIsNinVerified(false);
        setNinVerificationMessage("Not Verified");
        console.log(isNinVerified);
        console.log("NIN not verified");
        setIsNinVerified(false);
        setNinVerificationMessage("Not Verified");
        console.log("NIN is incorrect");

        // Display error for 2 seconds
        setShowNinError(true);
        setTimeout(() => {
          setShowNinError(false);
        }, 2000);
      }
    } catch (error) {
      setNinVerificationMessage("Error verifying NIN.", error);
      console.log("Error verifying NIN");
    }
  };

  const handleVinVerification = async (e) => {
    e.preventDefault();
    try {
      if (vin === "345678910") {
        setIsVinVerified(true);
        setVinVerificationMessage("Verified");
        console.log("VIN Verified");
      } else if (vin === "") {
        setIsVinVerified(false);
        setVinVerificationMessage("Not Verified");
        console.log("Empty input");
      } else {
        setIsVinVerified(false);
        setVinVerificationMessage("Not Verified");
        console.log("VIN is incorrect");

        // Display error for 2 seconds
        setShowVinError(true);
        setTimeout(() => {
          setShowVinError(false);
        }, 2000);
      }
    } catch (error) {
      setVinVerificationMessage("Error verifying VIN.");
      console.error("Error Verifying VIN:", error);
    }
  };

  const handleCheckBox1 = (e) => {
    setAffirmationCheck(e.target.checked);
  };

  const handleCheckBox2 = (e) => {
    setAffirmationCheck(e.target.checked);
  };

  const handleCheckBox3 = (e) => {
    setAffirmationCheck(e.target.checked);
  };

  const submitFunc = async (e) => {
    e.preventDefault();
    if (
      isNinVerified === true &&
      isVinVerified === true &&
      affirmationCheck === true
    ) {
      setVoteStatus(true);
      setIsSearching("");
      // setVoteSubmit(true);
      console.log(`Your vote has been submitted! ${voteStatus}`);
    } else {
      setVoteStatus(
        "There was an error submitting your vote. Please check all inputs. "
      );
      setIsSearching("Searching...");
      // setVoteSubmit(false);
      console.log("We were not able to submit your vote.");
    }
  };

  return (
    <>
      <div
        className="container-fluid section-color"
        style={{ paddingBottom: "30px" }}
      >
        <Sidebar />
        <h3 className="voting-dashBoard-heading">
          Presidential Voting DashBoard
        </h3>
        <p className="voting-dashBoard-p">
          Search the political party of the candidate you want to vote for.
        </p>
        <form
          onSubmit={searchFunc}
          action=""
          style={{
            display: "flex",
            gap: "20px",
            width: "800px",
            margin: "70px auto",
          }}
        >
          <input
            type="text"
            onChange={(e) => setIsSearching(e.target.value)}
            value={isSearching}
            className="form-control form-control-lg political-party-search"
            placeholder="Search by your preferred Political Party. E.g APC"
            style={{ width: "500px", height: "38px", borderRadius: "0px" }}
          />
          <button
            type="submit"
            className="btn btn-outline-success"
            style={{ width: "160px", fontSize: "19px", borderRadius: "0px" }}
          >
            Search
          </button>
        </form>
      </div>

      {!isSearching && (
        <div
          className="container-fluid section-color"
          style={{ paddingTop: "0px" }}
        >
          <div className="row">
            <div className="col-md-6 card">
              <p className="text-center">Candidate card</p>
            </div>
            <div className="col-md-6 card">
              <p className="text-center">
                Candidate name, no of votes, percentage of vote
              </p>
            </div>
            <div className="col-md-8 card">
              <p className="text-center">Live statistics section</p>
            </div>
            <div className="col-md-4 card">
              <p className="text-center">Live statistics section</p>
            </div>
          </div>
        </div>
      )}

      {isSearching === "pdp" && (
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  className="form-control form-width-height"
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  placeholder="Date of Birth"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            <h3 className="residential-information">Residential Information</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
            </div>

            <h3 className="verification-information">
              Verification Information
            </h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                  type="number"
                  placeholder="National Identification Number (NIN)"
                  className="form-control form-width-height"
                  name=""
                />
                {showNinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    NIN is Incorrect
                  </p>
                ) : isNinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your NIN has been verified! {ninVerificationMessage}
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleNinVerification}
                  >
                    Verify
                  </a>
                )}
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  type="number"
                  placeholder="Voters Identification Number (VIN)"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {showVinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    VIN is Incorrect
                  </p>
                ) : isVinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your VIN has been verified! {vinVerificationMessage}
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleVinVerification}
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>

            <h3 className="vote-confirmation">Vote Confirmation</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  disabled
                  placeholder={isSearching.toUpperCase()}
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="form-verification-checkmark">
              <label>
                <input
                  required
                  checked={affirmationCheck}
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
                  checked={affirmationCheck}
                  onChange={handleCheckBox2}
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I am 100% sure I selected my preferred political
                party to vote for
              </label>
              <label>
                <input
                  required
                  checked={affirmationCheck}
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
              className="btn btn-outline-success vote-submit mt-5"
              style={{ fontSize: "19.5px" }}
            >
              Vote
            </button>
          </form>
        </div>
      )}

      {isSearching === "apc" && (
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  className="form-control form-width-height"
                />
              </div>
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  placeholder="Date of Birth"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            <h3 className="residential-information">Residential Information</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <select
                  id="food-select"
                  required
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
                  onChange={(e) => setVoteSubmit(e.target.value)}
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
            </div>

            <h3 className="verification-information">
              Verification Information
            </h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                  type="number"
                  placeholder="National Identification Number (NIN)"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {showNinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    NIN is Incorrect
                  </p>
                ) : isNinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your NIN has been verified! {ninVerificationMessage}
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleNinVerification}
                  >
                    Verify
                  </a>
                )}
              </div>

              <div className="col-md-4 mt-4">
                <input
                  required
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  type="number"
                  placeholder="Voters Identification Number (VIN)"
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
                {showVinError ? (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    VIN is Incorrect
                  </p>
                ) : isVinVerified ? (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Your VIN has been verified! {vinVerificationMessage}
                  </p>
                ) : (
                  <a
                    href="#"
                    style={{ color: "green", marginTop: "10px" }}
                    onClick={handleVinVerification}
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>

            <h3 className="vote-confirmation">Vote Confirmation</h3>
            <div className="row form-section-bg-color">
              <div className="col-md-4 mt-4">
                <input
                  required
                  type="text"
                  onChange={(e) => setVoteSubmit(e.target.value)}
                  disabled
                  placeholder={isSearching.toUpperCase()}
                  className="form-control form-width-height"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="form-verification-checkmark">
              <label>
                <input
                  checked={affirmationCheck}
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
                  checked={affirmationCheck}
                  onChange={handleCheckBox2}
                  required
                  type="checkbox"
                  className="checkbox"
                  name=""
                  id=""
                />{" "}
                I verify that I am 100% sure I selected my preferred political
                party to vote for
              </label>
              <label>
                <input
                  required
                  checked={affirmationCheck}
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
              className="btn btn-outline-success  vote-submit mt-5"
              style={{ fontSize: "19.5px" }}
            >
              Vote
            </button>
          </form>
        </div>
      )}

      {voteStatus === true && isSearching === "" && (
        <p style={{ color: "white" }}>Your vote has been submitted. Weldone!</p>
      )}
    </>
  );
}
