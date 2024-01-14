import React, { useState } from "react";
import TableComponent from "./TableComponent/";
import ProposalComponent from "./ProposalComponent";

const FileComponent = () => {
  //Track if the bill is submitted or not (show the proposals section or not)
  const [billSubmitted, setBillSubmitted] = useState(false);
  // Function to be called by the child component to update the state
  const handleBillSubmit = (isSubmitted) => {
    setBillSubmitted(isSubmitted);
  };
  return (
    <section>
      <TableComponent onBillSubmit={handleBillSubmit} />
      {billSubmitted ? <ProposalComponent /> : null}
      {/* <ProposalComponent /> */}
    </section>
  );
};

export default FileComponent;
