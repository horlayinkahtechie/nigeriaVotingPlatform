import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function VoteData() {
  const [vote, setVote] = useState(0);
  const [tinubuVotes, setTinubuVotes] = useState(0);
  const [votesData, setVotesData] = useState([]);
  const [tinubuVotesData, setTinubuVotesData] = useState([]);
  const [presidentialNav, setPresidentialNav] = useState(1);

  const voteFunc = () => {
    const voteNo = vote + 1;
    setVote(voteNo);
    setVotesData([...votesData, voteNo]); // Add new vote count to data array
  };

  const tinubuVoteFunc = () => {
    const tinubuVoteNo = tinubuVotes + 1;
    setTinubuVotes(tinubuVoteNo);
    setTinubuVotesData([...tinubuVotesData, tinubuVoteNo]); // Add new vote count to data array
  };

  const respectiveCandidateVotes = (navId) => {
    setPresidentialNav(navId);
  };

  const voteData = {
    labels: votesData.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Obasanjo Votes",
        data: votesData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const tinubuData = {
    labels: tinubuVotesData.map((_, index) => `Day ${index + 1}`), // Fixing the label issue here
    datasets: [
      {
        label: "Tinubu Votes",
        data: tinubuVotesData, // Using the correct data array
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="container-fluid section-color">
      <h3 className="faq-heading">Presidential vote chart</h3>
      <p className="faq-p">
        Click on the candidate you want to check their votes
      </p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
          marginTop: "60px",
        }}
      >
        <button
          type="button"
          className="political-candidate"
          onClick={() => respectiveCandidateVotes(1)}
        >
          Obasanjo
        </button>
        <button
          type="button"
          className="political-candidate"
          onClick={() => respectiveCandidateVotes(2)}
        >
          Tinubu
        </button>
      </div>

      {presidentialNav === 1 && (
        <div className="col-md-12">
          <button type="button" onClick={voteFunc}>
            Vote for Obasanjo
          </button>
          <Line data={voteData} />
        </div>
      )}

      {presidentialNav === 2 && (
        <div className="col-md-12">
          <button type="button" onClick={tinubuVoteFunc}>
            Vote for Tinubu
          </button>
          <Line data={tinubuData} />
        </div>
      )}
    </div>
  );
}
