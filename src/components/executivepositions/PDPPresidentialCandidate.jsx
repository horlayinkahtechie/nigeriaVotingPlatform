const PDPPresidentialCandidate = ({
  name,
  image,
  mission,
  vision,
  politicalPartyImg,
  politicalPartyName,
}) => {
  return (
    <>
      <div className="candidate-card">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="img-fluid PDP-presidential-candidate-img"
        />
        <div className="overlay">
          <div className="candidate-info">
            <h3 className="candidate-heading">Political party</h3>
            <img
              src={politicalPartyImg}
              alt={politicalPartyName}
              loading="lazy"
              className="img-fluid candidiate-party-img"
              style={{ width: "60px", height: "60px", marginBottom: "30px" }}
            />
            <h3 className="candidate-heading">Mission</h3>
            <p className="candidate-p">{mission}</p>

            <h3 className="candidate-heading mt-4">Vision</h3>
            <p className="candidate-p">{vision}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDPPresidentialCandidate;
