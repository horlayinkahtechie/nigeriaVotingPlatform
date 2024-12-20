import TinubuPotrait from "../../Images/Bola_Tinubu_portrait.jpg";
import ObasanjoPortrait from "../../Images/Obasanjo potrait.webp";
import APCLogo from "../../Images/APC Logo.jpg";

import APCPresidentialCandidates from "./APCPresidentialCandidate";

const CandidateDetails = () => {
  const candidates = [
    {
      name: "Bola Ahmed Tinubu",
      image: TinubuPotrait,
      politicalPartyImg: APCLogo,
      politicalPartyName: "APC",
      mission:
        "To transform our nation into a beacon of accountability and innovation by fostering transparent governance, equitable resource distribution, and policies that empower citizens to achieve their full potential.",
      vision:
        "To build a unified, prosperous nation where opportunities are accessible to all, and the government serves as a model of integrity and progress on the global stage.",
    },
    {
      name: "Chef Jane Smith",
      image: ObasanjoPortrait,
      politicalPartyImg: APCLogo,
      politicalPartyName: "APC",
      mission:
        "To advocate for the needs of underserved communities, creating policies that prioritize affordable healthcare, education, and sustainable economic growth while putting people first.",
      vision:
        "A country where every citizen, regardless of background, enjoys equal opportunities, security, and a voice in shaping their future.",
    },
  ];

  return (
    <>
      <div className="container-fluid section-margin">
        <div className="row">
          {candidates.map((candidate, index) => (
            <div className="col-md-6 mt-3" key={index}>
              {" "}
              {/* Each Chef in its own column */}
              <APCPresidentialCandidates
                name={candidate.name}
                politicalPartyImg={candidate.politicalPartyImg}
                mission={candidate.mission}
                vision={candidate.vision}
                image={candidate.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
