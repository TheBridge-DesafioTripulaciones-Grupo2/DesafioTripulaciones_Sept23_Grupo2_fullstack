import React from "react";

const OthersTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Otros presupuestos (€)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="otros-precio-1"
                id="otros-precio-1"
                placeholder="Cantidad"
              />
            </td>
            <td className="others-checkbox">
              <label htmlFor="otros-propuesta-1">
                Incluir valor en la propuesta
              </label>
              <input
                type="checkbox"
                name="otros-propuesta-1"
                id="otros-propuesta-1"
                value={true}
              />
            </td>
            <td className="others-checkbox">
              <label htmlFor="otros-anual-1">Se cobrará todo el año</label>
              <input
                type="checkbox"
                name="otros-anual-1"
                id="otros-anual-1"
                value={true}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="otros-precio-2"
                id="otros-precio-2"
                placeholder="Cantidad"
              />
            </td>
            <td className="others-checkbox">
              <label htmlFor="otros-propuesta-2">
                Incluir valor en la propuesta
              </label>
              <input
                type="checkbox"
                name="otros-propuesta-2"
                id="otros-propuesta-2"
                value={true}
              />
            </td>
            <td className="others-checkbox">
              <label htmlFor="otros-anual-2">Se cobrará todo el año</label>
              <input
                type="checkbox"
                name="otros-anual-2"
                id="otros-anual-2"
                value={true}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OthersTable;
