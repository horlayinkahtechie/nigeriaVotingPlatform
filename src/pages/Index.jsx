// import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import FAQs from "../components/FAQs";
import VoteData from "../components/VoteData";
// import Chart from "./Chart";
// import VoteData from "./VoteData";
export default function Index() {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12">
          <Sidebar />
        </div>
        <div className="col-md-12" style={{ marginTop: "100px" }}>
          <Carousel />
        </div>
      </div>
      <div className="container-fluid section-color">
        <div className="row">
          <h3 className="voting-instruction-heading">
            Follow the steps below to vote
          </h3>
          <div className="col-md-4 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-hand-index-thumb"
              viewBox="0 0 16 16"
              style={{ color: "green", marginBottom: "30px" }}
            >
              <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
            </svg>
            <h3 className="steps">Step 1</h3>
            <p className="steps-details">
              Log in to your account and click on the vote now button. You will
              be asked for your NIN and Voters card for further authentication.
            </p>
          </div>

          <div className="col-md-4 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
              style={{ color: "green", marginBottom: "30px" }}
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h3 className="steps">Step 2</h3>
            <p className="steps-details">
              Search, select and verify who you want to vote for. You cannot
              vote twice, so verify before you submit
            </p>
          </div>

          <div className="col-md-4 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-bar-chart"
              viewBox="0 0 16 16"
              style={{ color: "green", marginBottom: "30px" }}
            >
              <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
            </svg>
            <h3 className="steps">Step 3</h3>
            <p className="steps-details">
              Check live results of each candidate participating in the
              election. You can also check your votings.
            </p>
          </div>
        </div>
      </div>
      <FAQs />

      <VoteData />
    </>
  );
}
