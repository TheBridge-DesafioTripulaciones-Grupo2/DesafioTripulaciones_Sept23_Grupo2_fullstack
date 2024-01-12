import React from "react";

const ExtraTable = () => {
  return (
    <table id="extra-table">
      <thead>
        <tr>
          <th>
            <p>Días de facturación (€)</p>
          </th>
          <th>
            <p>Impuesto eléctrico (€)</p>
          </th>
          <th>
            <p>Alquiler de equipo (€)</p>
          </th>
          <th>
            <p>Energía reactiva</p>
          </th>
          <th>
            <p>IVA (%)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" name="dias_facturacion" id="dias_facturacion" />
          </td>
          <td>
            <input
              type="text"
              name="impuesto_electrico"
              id="impuesto_electrico"
            />
          </td>
          <td>
            <input type="text" name="alquiler_equipo" id="alquiler_equipo" />
          </td>
          <td>
            <input type="text" name="energia_reactiva" id="energia_reactiva" />
          </td>
          <td>
            <select name="IVA" id="IVA">
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="21">21%</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExtraTable;
