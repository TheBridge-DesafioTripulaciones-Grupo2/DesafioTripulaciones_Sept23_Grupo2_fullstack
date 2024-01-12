import React from "react";

const MonthlyTable = ({ display }) => {
  return (
    <>
      <section className={`monthly-tables ${display}`}>
        <table id="monthly-energy" className="monthly-table">
          <thead>
            <tr>
              <th className="table-header" colSpan={6}>ENERGÍA</th>
            </tr>
            <tr className="table-subheaders">
    <th className="table-subheader"><p>Franja</p></th>
    <th className="table-subheader"><p>Consumo factura <br />actual (€/KWh)</p></th>
    <th className="table-subheader"><p>Precios energía activa <br />mes de facturación <br />(€/KWh)</p></th>
    <th className="table-subheader"><p>Descuento <br /> (%)</p></th>
    <th className="table-subheader"><p>Precio con <br /> descuento (€)</p></th>
    <th className="table-subheader"><p>Total pago <br />factura (€)</p></th>
</tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td>
                <input
                  type="text"
                  name="P1_consumo_actual"
                  id="P1_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P1_precio_mes" id="P1_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_descuento_energia"
                  id="P1_descuento_energia"
                />
              </td>
              <td id="P1_precio_mes_descuento"></td>
              <td id="P1_precio_total_energia"></td>
            </tr>
            <tr>
              <td>P2</td>
              <td>
                <input
                  type="text"
                  name="P2_consumo_actual"
                  id="P2_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P2_precio_mes" id="P2_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_descuento_energia"
                  id="P2_descuento_energia"
                />
              </td>
              <td id="P2_precio_mes_descuento"></td>
              <td id="P2_precio_total_energia"></td>
            </tr>
            <tr>
              <td>P3</td>
              <td>
                <input
                  type="text"
                  name="P3_consumo_actual"
                  id="P3_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P3_precio_mes" id="P3_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_descuento_energia"
                  id="P3_descuento_energia"
                />
              </td>
              <td id="P3_precio_mes_descuento"></td>
              <td id="P3_precio_total_energia"></td>
            </tr>
            <tr>
              <td>P4</td>
              <td>
                <input
                  type="text"
                  name="P4_consumo_actual"
                  id="P4_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P4_precio_mes" id="P4_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_descuento_energia"
                  id="P4_descuento_energia"
                />
              </td>
              <td id="P4_precio_mes_descuento"></td>
              <td id="P4_precio_total_energia"></td>
            </tr>
            <tr>
              <td>P5</td>
              <td>
                <input
                  type="text"
                  name="P5_consumo_actual"
                  id="P5_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P5_precio_mes" id="P5_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_descuento_energia"
                  id="P5_descuento_energia"
                />
              </td>
              <td id="P5_precio_mes_descuento"></td>
              <td id="P5_precio_total_energia"></td>
            </tr>
            <tr>
              <td>P6</td>
              <td>
                <input
                  type="text"
                  name="P6_consumo_actual"
                  id="P6_consumo_actual"
                />
              </td>
              <td>
                <input type="text" name="P6_precio_mes" id="P6_precio_mes" />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_descuento_energia"
                  id="P6_descuento_energia"
                />
              </td>
              <td id="P6_precio_mes_descuento"></td>
              <td id="P6_precio_total_energia"></td>
            </tr>
          </tbody>
        </table>
        <table id="monthly-power" className="monthly-table">
          <thead>
            <tr>
              <th className="table-header" colSpan={6}>POTENCIA</th>
            </tr>
            <tr className="table-subheaders">
    <th className="table-subheader"><p>Potencia <br />contratada <br />(KWh)</p></th>
    <th className="table-subheader"><p>Precios potencia <br /> (€)</p></th>
    <th className="table-subheader"><p>Descuentos <br />(%)</p></th>
    <th className="table-subheader"><p>Precios con <br />descuentos <br />(€)</p></th>
    <th className="table-subheader"><p>Total pago <br />factura (€)</p></th>
</tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="P1_potencia_contratada"
                  id="P1_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_precios_potencia"
                  id="P1_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P1_descuento_potencia"
                  id="P1_descuento_potencia"
                />
              </td>
              <td id="P1_precio_mes_descuento"></td>
              <td id="P6_precio_total_potencia"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="P2_potencia_contratada"
                  id="P2_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_precios_potencia"
                  id="P2_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P2_descuento_potencia"
                  id="P2_descuento_potencia"
                />
              </td>
              <td id="P2_precio_mes_descuento_potencia"></td>
              <td id="P2_precio_total_potencia"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="P3_potencia_contratada"
                  id="P3_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_precios_potencia"
                  id="P3_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P3_descuento_potencia"
                  id="P3_descuento_potencia"
                />
              </td>
              <td id="P3_precio_mes_descuento_potencia"></td>
              <td id="P3_precio_total_potencia"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="P4_potencia_contratada"
                  id="P4_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_precios_potencia"
                  id="P4_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P4_descuento_potencia"
                  id="P4_descuento_potencia"
                />
              </td>
              <td id="P4_precio_mes_descuento_potencia"></td>
              <td id="P4_precio_total_potencia"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="P5_potencia_contratada"
                  id="P5_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_precios_potencia"
                  id="P5_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P5_descuento_potencia"
                  id="P5_descuento_potencia"
                />
              </td>
              <td id="P5_precio_mes_descuento_potencia"></td>
              <td id="P5_precio_total_potencia"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="P6_potencia_contratada"
                  id="P6_potencia_contratada"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_precios_potencia"
                  id="P6_precios_potencia"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="P6_descuento_potencia"
                  id="P6_descuento_potencia"
                />
              </td>
              <td id="P6_precio_mes_descuento_potencia"></td>
              <td id="P6_precio_total_potencia"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default MonthlyTable;
