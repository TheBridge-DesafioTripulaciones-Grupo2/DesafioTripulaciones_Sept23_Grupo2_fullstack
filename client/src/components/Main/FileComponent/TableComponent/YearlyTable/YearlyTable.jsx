import React, { useEffect } from "react";

const YearlyTable = ({ display }) => {
  useEffect(() => {
    console.log(display);
  }, []);
  return (
    <div className={display}>
      <section className={`anual-tables ${display}`}>
        <table id="yearly-energy" className="anual-table">
          <thead>
            <tr>
              <th className="table-header" colSpan={6}>
                ENERGÍA
              </th>
            </tr>
            <tr className="table-subheaders">
              <th className="table-subheader first-column">
                <p>Franja</p>
              </th>
              <th className="table-subheader">
                <p>
                  Consumo factura <br />
                  anual (€/KWh)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Precios energía activa <br />
                  media anual <br />
                  (€/KWh)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Descuento <br /> (%)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Precio con <br /> descuento (€)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Total pago <br />
                  anual (€)
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-column">P1</td>
              <td>
                <input
                  type="text"
                  name="P1_consumo_anual"
                  id="P1_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_precio_anual"
                  id="P1_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_descuento_anual"
                  id="P1_descuento_anual"
                />
              </td>
              <td id="P1_precio_anual_descuento_energia"></td>
              <td id="P1_precio_anual_total_energia"></td>
            </tr>
            <tr>
              <td className="first-column">P2</td>
              <td>
                <input
                  type="text"
                  name="P2_consumo_anual"
                  id="P2_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_precio_anual"
                  id="P2_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_descuento_anual"
                  id="P2_descuento_anual"
                />
              </td>
              <td id="P2_precio_anual_con_descuento"></td>
              <td id="P2_precio_anual_total"></td>
            </tr>
            <tr>
              <td className="first-column">P3</td>
              <td>
                <input
                  type="text"
                  name="P3_consumo_anual"
                  id="P3_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_precio_anual"
                  id="P3_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_descuento_anual"
                  id="P3_descuento_anual"
                />
              </td>
              <td id="P3_precio_anual_con_descuento"></td>
              <td id="P3_precio_anual_total"></td>
            </tr>
            <tr>
              <td className="first-column">P4</td>
              <td>
                <input
                  type="text"
                  name="P4_consumo_anual"
                  id="P4_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_precio_anual"
                  id="P4_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_descuento_anual"
                  id="P4_descuento_anual"
                />
              </td>
              <td id="P4_precio_anual_con_descuento"></td>
              <td id="P4_precio_anual_total"></td>
            </tr>
            <tr>
              <td className="first-column">P5</td>
              <td>
                <input
                  type="text"
                  name="P5_consumo_anual"
                  id="P5_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_precio_anual"
                  id="P5_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_descuento_anual"
                  id="P5_descuento_anual"
                />
              </td>
              <td id="P5_precio_anual_con_descuento"></td>
              <td id="P5_precio_anual_total"></td>
            </tr>
            <tr>
              <td className="first-column">P6</td>
              <td>
                <input
                  type="text"
                  name="P6_consumo_anual"
                  id="P6_consumo_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_precio_anual"
                  id="P6_precio_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_descuento_anual"
                  id="P6_descuento_anual"
                />
              </td>
              <td id="P6_precio_anual_con_descuento"></td>
              <td id="P6_precio_anual_total"></td>
            </tr>

            <tr className="final-row">
              <td className="first-column colored-cell">Total</td>
              <td id="consumo_actual_total_anual" className="colored-cell"></td>
              <td id="precio_anual_total" className="colored-cell"></td>
              <td className="empty-cell"></td>
              <td className="empty-cell"></td>
              <td id="precio_total_energia_anual" className="last-cell colored-cell"></td>
            </tr>
          </tbody>
        </table>
        <table id="monthly-power" className="anual-table">
          <thead>
            <tr>
              <th className="table-header" colSpan={6}>
                POTENCIA
              </th>
            </tr>
            <tr className="table-subheaders">
              <th className="table-subheader first-column">
                <p>
                  Potencia <br />
                  contratada <br />
                  (KWh)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Precios potencia <br /> (€)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Descuentos <br />
                  (%)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Precios con <br />
                  descuentos <br />
                  (€)
                </p>
              </th>
              <th className="table-subheader">
                <p>
                  Total pago <br />
                  anual (€)
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P1_potencia_contratada_anual"
                  id="P1_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_precios_potencia_anual"
                  id="P1_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_descuento_potencia_anual"
                  id="P1_descuento_potencia_anual"
                />
              </td>
              <td id="P1_precio_anual_descuento"></td>
              <td id="P1_precio_total_potencia_anual"></td>
            </tr>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P2_potencia_contratada_anual"
                  id="P2_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_precios_potencia_anual"
                  id="P2_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_descuento_potencia_anual"
                  id="P2_descuento_potencia_anual"
                />
              </td>
              <td id="P2_precio_anual_descuento"></td>
              <td id="P2_precio_total_potencia_anual"></td>
            </tr>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P3_potencia_contratada_anual"
                  id="P3_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_precios_potencia_anual"
                  id="P3_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_descuento_potencia_anual"
                  id="P3_descuento_potencia_anual"
                />
              </td>
              <td id="P3_precio_anual_descuento"></td>
              <td id="P3_precio_total_potencia_anual"></td>
            </tr>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P4_potencia_contratada_anual"
                  id="P4_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_precios_potencia_anual"
                  id="P4_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_descuento_potencia_anual"
                  id="P4_descuento_potencia_anual"
                />
              </td>
              <td id="P4_precio_anual_descuento"></td>
              <td id="P4_precio_total_potencia_anual"></td>
            </tr>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P5_potencia_contratada_anual"
                  id="P5_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_precios_potencia_anual"
                  id="P5_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_descuento_potencia_anual"
                  id="P5_descuento_potencia_anual"
                />
              </td>
              <td id="P5_precio_anual_descuento"></td>
              <td id="P5_precio_total_potencia_anual"></td>
            </tr>
            <tr>
              <td className="first-column">
                <input
                  type="text"
                  name="P6_potencia_contratada_anual"
                  id="P6_potencia_contratada_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_precios_potencia_anual"
                  id="P6_precios_potencia_anual"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_descuento_potencia_anual"
                  id="P6_descuento_potencia_anual"
                />
              </td>
              <td id="P6_precio_anual_descuento"></td>
              <td id="P6_precio_total_potencia_anual"></td>
            </tr>

            <tr className="final-row">
              <td className="empty-cell"></td>
              <td className="empty-cell"></td>
              <td className="empty-cell"></td>
              <td className="empty-cell"></td>
              <td id="precio_total_potencia" className="last-cell colored-cell"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default YearlyTable;
