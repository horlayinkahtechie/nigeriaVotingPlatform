export default function FAQs() {
  return (
    <div className="container-fluid section-color">
      <h3 className="faq-heading">Frequently Asked Questions</h3>
      <p className="faq-p">Everything you need to know about the voting.</p>
      <div className="row">
        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            What is this platform about?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample1">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              This platform allows users to vote for candidates in presidential
              and other political positions. It aims to provide a transparent
              and secure voting experience.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            How do I create an account?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample2">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              Click on the &quot;Sign Up&quot; button and fill in the required
              information. You’ll receive a confirmation email to verify your
              account.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            Is my vote anonymous?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample3">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              Yes, your vote is completely anonymous. We do not store any
              identifiable information with your voting choices.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            Can I vote more than once?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample4">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              No, each registered user is only allowed to vote once per position
              to ensure fair and accurate results.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            How do I vote?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample5"
              aria-expanded="false"
              aria-controls="collapseExample5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample5">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              Once you&apos;re logged in, navigate to the voting page, select
              the position you wish to vote for, and choose your preferred
              candidate. Click &quot;Submit&quot; to cast your vote.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid green",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            How can I see the results?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample6"
              aria-expanded="false"
              aria-controls="collapseExample6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div
            className="collapse"
            id="collapseExample6"
            style={{ backgroundColor: "rgb(45, 45, 73)" }}
          >
            <div className="dropdown-menu-color">
              Once the voting period ends, results will be displayed on the
              results page, showing the final tally for each candidate.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            Who can participate in the voting?
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "rgb(244, 244, 244)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample7"
              aria-expanded="false"
              aria-controls="collapseExample7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample7">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              Only registered users who meet the eligibility criteria set by the
              administrators can participate.
            </div>
          </div>
        </div>

        <div
          className="col-md-12"
          style={{
            width: "80%",
            margin: "30px auto",
            marginBottom: "15px",
            borderBottom: "1px solid rgb(45, 45, 73)",
          }}
        >
          <p className="d-inline-flex gap-1 faq-dropdown-heading">
            Is there a deadline to vote?
            <button
              style={{
                border: "none",
                outline: "none",
                borderBottom: "1px solid rgb(45, 45, 73)",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample8"
              aria-expanded="false"
              aria-controls="collapseExample8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ color: "green" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </p>
          <div className="collapse" id="collapseExample8">
            <div
              className="dropdown-menu-color"
              style={{ backgroundColor: "rgb(45, 45, 73)" }}
            >
              Yes, each election has a specific voting period. Make sure to cast
              your vote before the deadline. The end time will be displayed on
              the voting page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
