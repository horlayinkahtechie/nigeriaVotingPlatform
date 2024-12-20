import BuhariPotrait from "../../Images/Buhari.jpg";
import AtikuPortrait from "../../Images/Atiku IMage.jpg";
import APCLogo from "../../Images/APC Logo.jpg";

import PDPPresidentialCandidates from "./PDPPresidentialCandidate";

const PDPCandidateDetails = () => {
  const candidates = [
    {
      name: "Bola Ahmed Tinubu",
      image: BuhariPotrait,
      politicalPartyImg: APCLogo,
      politicalPartyName: "APC",
      mission:
        "To lead our nation into a digital era by investing in technology, renewable energy, and infrastructure, ensuring our economy thrives in the global market.",
      vision:
        "A technologically advanced, environmentally sustainable, and globally competitive nation where every citizen benefits from modernization.",
    },
    {
      name: "Chef Jane Smith",
      image: AtikuPortrait,
      politicalPartyImg: APCLogo,
      politicalPartyName: "APC",
      mission:
        "To strengthen our national security and ensure peace by fostering regional collaboration, modernizing our defense systems, and addressing the root causes of conflict.",
      vision:
        "A peaceful and secure nation where citizens live without fear, and prosperity flourishes through stability and justice.",
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
              <PDPPresidentialCandidates
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

export default PDPCandidateDetails;
