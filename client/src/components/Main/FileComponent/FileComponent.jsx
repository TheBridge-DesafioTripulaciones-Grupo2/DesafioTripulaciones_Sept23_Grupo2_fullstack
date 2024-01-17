import React, { useEffect, useRef, useState } from "react";
import TableComponent from "./TableComponent/";
import ProposalComponent from "./ProposalComponent";

const FileComponent = () => {
  //Track if the bill is submitted or not (show the proposals section or not)
  const [billSubmitted, setBillSubmitted] = useState(false);
  const proposalRef = useRef(null);
  // Function to be called by the child component to update the state
  const handleBillSubmit = (isSubmitted) => {
    setBillSubmitted(isSubmitted);
  };

  useEffect(() => {
    if (billSubmitted && proposalRef.current) {
      proposalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [billSubmitted]);

  return (
    <section>
      <TableComponent onBillSubmit={handleBillSubmit} />
      {billSubmitted ? (
        <div ref={proposalRef}>
          <ProposalComponent />
        </div>
      ) : null}
      {/* <ProposalComponent /> */}
    </section>
  );
};

export default FileComponent;
