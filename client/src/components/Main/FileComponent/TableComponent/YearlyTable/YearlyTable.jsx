import React, { useEffect } from "react";

const YearlyTable = ({display}) => {
  useEffect(() => {
    console.log(display);
  }, [])
  return <div className={display}>YearlyTable</div>;
}; 

export default YearlyTable;
