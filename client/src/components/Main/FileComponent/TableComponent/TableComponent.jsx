import React, { useState } from "react";
import YearlyTable from "./YearlyTable/YearlyTable";
import MonthlyTable from "./MonthlyTable/MonthlyTable";
import ExtraTable from "./ExtraTable/ExtraTable";
import OthersTable from "./OthersTable/OthersTable";
import BillCost from "./BillCost/BillCost";

const TableComponent = () => {
  //File Details
  const [titular, setTitular] = useState("placeholder");
  const [direccion, setDireccion] = useState("placeholder");
  const [cups, setCups] = useState("placeholder");

//Track if the bill is filled
  const [isBillFilled, setIsBillFilled] = useState(true); ///CAMBIAR A FALSE CUANDO PODAMOS RELLENAR DATOS

  //Track if the bill is submitted or not (show the proposals section or not)
  const [billSubmitted, setBillSubmitted] = useState(false);

  //Track if the table should show month or year
  const [yearlyChecked, setYearlyChecked] = useState(false);
  const hiddenTable = "hidden-table";
  const shownTable = "table";

  const showYearlyTable = () => {
    setYearlyChecked(true);
  };
  const hideYearlyTable = () => {
    setYearlyChecked(false);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
  };

  return (
    <section>
      <div id="file-details">
        <div id="file-details-titular" className="file-detail">
          <p className="file-detail-title">Titular: </p>
          <p>{titular}</p>
        </div>
        <div id="file-details-direccion" className="file-detail">
          <p className="file-detail-title">Dirección de suministro: </p>
          <p>{direccion}</p>
        </div>
        <div id="file-details-cups" className="file-detail">
          <p className="file-detail-title">CUPS: </p>
          <p>{cups}</p>
        </div>
      </div>
      <div id="table-buttons">
        <div id="table-buttons-toggle">
          <button
            id="monthly-button"
            className={yearlyChecked ? "button" : "highlighted-button"}
            onClick={hideYearlyTable}
          >
            Consumo mensual
          </button>
          <button
            id="yearly-button"
            className={yearlyChecked ? "highlighted-button" : "button"}
            onClick={showYearlyTable}
          >
            Consumo anual
          </button>
        </div>
        <div id="table-buttons-select">
          <select name="rate-select" id="rate-select">
            <option value="2.0TD">2.0TD</option>
            <option value="3.0TD" disabled>
              3.0TD
            </option>
            <option value="6.1TD" disabled>
              6.1TD
            </option>
            <option value="6.2TD" disabled>
              6.2TD
            </option>
          </select>
        </div>
      </div>
      <form>
        <MonthlyTable display={yearlyChecked ? hiddenTable : shownTable} />
        <YearlyTable display={yearlyChecked ? shownTable : hiddenTable} />
        <section id="bottom-tables-section">
          <ExtraTable />
          <OthersTable />
        </section>
        <section id="confirm-section">
          <BillCost />
          <button type="submit" disabled={!isBillFilled}>Continuar</button>
        </section>
      </form>
    </section>
  );
};

export default TableComponent;
