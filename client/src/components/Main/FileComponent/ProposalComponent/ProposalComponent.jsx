import React, { useEffect, useState } from "react";
import placeholder from "../../../../assets/placeholder-graph.svg";
import Plot from 'react-plotly.js';
import { Link } from "react-router-dom";

const ProposalComponent = () => {
  const [monthlySavings, setMonthlySavings] = useState("12,34");
  const [yearlySavings, setYearlySavings] = useState("12,34");

  const [cia, setCia] = useState("");
  const [productos, setProductos] = useState([]);
  const [feeOptions, setFeeOptions] = useState([]);

  const mensualFijo = [
    {
      cia: "NATURGY",
      fee: "-",
      producto_cia: "RESIDENCIAL POR USO LUZ LOYAL",
      costototal: 59.15,
      ahorro: 2.39,
      porcentajeahorro: 3.88,
      p1_e: 0.1922,
      p2_e: 0.1373,
      p3_e: 0.09,
      p1_p: 0.094086,
      p2_p: 0.028222,
      precioactual: 61.54,
    },
    {
      cia: "ENDESA",
      fee: "-",
      producto_cia: "OPEN(<15) PLANA",
      costototal: 61.56,
      ahorro: -0.02,
      porcentajeahorro: -0.03,
      p1_e: 0.12948,
      p2_e: 0.12948,
      p3_e: 0.12948,
      p1_p: 0.0978039032,
      p2_p: 0.0331793226,
      precioactual: 61.54,
    },
    {
      cia: "IBERDROLA",
      fee: "-",
      producto_cia: "2.0<10kW PLAN ESTABLE",
      costototal: 64.05,
      ahorro: -2.51,
      porcentajeahorro: -4.08,
      p1_e: 0.146745,
      p2_e: 0.146745,
      p3_e: 0.146745,
      p1_p: 0.0889827863,
      p2_p: 0.0145016192,
      precioactual: 61.54,
    },
    {
      cia: "GANA",
      fee: "-",
      producto_cia: "ONLINE TG",
      costototal: 65.86,
      ahorro: -4.32,
      porcentajeahorro: -7.02,
      p1_e: 0.176,
      p2_e: 0.129,
      p3_e: 0.105,
      p1_p: 0.123,
      p2_p: 0.05,
      precioactual: 61.54,
    },
    {
      cia: "TOTAL",
      fee: "-",
      producto_cia: "CLASICA",
      costototal: 70.24,
      ahorro: -8.7,
      porcentajeahorro: -14.14,
      p1_e: 0.228117,
      p2_e: 0.17533,
      p3_e: 0.153505,
      p1_p: 0.0695427397,
      p2_p: 0.0036786301,
      precioactual: 61.54,
    },
  ];

  // Extracting data for the bar chart
  const dataMensual = {
    cia: mensualFijo.map((item) => item.cia),
    ahorro: mensualFijo.map((item) => item.ahorro),
    customdata: mensualFijo.map((item) => [
      item.fee,
      item.producto_cia,
      item.ahorro,
      item.porcentajeahorro,
    ]),
  };

  const anualFijo = [
    {
      cia: "NATURGY",
      fee: "-",
      producto_cia: "RESIDENCIAL POR USO LUZ LOYAL",
      costototal: 661.75,
      ahorro: 23.8,
      porcentajeahorro: 3.47,
      p1_e: 0.1922,
      p2_e: 0.1373,
      p3_e: 0.09,
      p1_p: 0.094086,
      p2_p: 0.028222,
      precioactual: 685.55,
    },
    {
      cia: "ENDESA",
      fee: "-",
      producto_cia: "OPEN(<15) PLANA",
      costototal: 685.81,
      ahorro: -0.26,
      porcentajeahorro: -0.04,
      p1_e: 0.12948,
      p2_e: 0.12948,
      p3_e: 0.12948,
      p1_p: 0.0978039032,
      p2_p: 0.0331793226,
      precioactual: 685.55,
    },
    {
      cia: "IBERDROLA",
      fee: "-",
      producto_cia: "2.0<10kW PLAN ESTABLE",
      costototal: 713.64,
      ahorro: -28.09,
      porcentajeahorro: -4.1,
      p1_e: 0.146745,
      p2_e: 0.146745,
      p3_e: 0.146745,
      p1_p: 0.0889827863,
      p2_p: 0.0145016192,
      precioactual: 685.55,
    },
    {
      cia: "GANA",
      fee: "-",
      producto_cia: "ONLINE TG",
      costototal: 734.87,
      ahorro: -49.32,
      porcentajeahorro: -7.19,
      p1_e: 0.176,
      p2_e: 0.129,
      p3_e: 0.105,
      p1_p: 0.123,
      p2_p: 0.05,
      precioactual: 685.55,
    },
    {
      cia: "TOTAL",
      fee: "-",
      producto_cia: "CLASICA",
      costototal: 784.24,
      ahorro: -98.69,
      porcentajeahorro: -14.4,
      p1_e: 0.228117,
      p2_e: 0.17533,
      p3_e: 0.153505,
      p1_p: 0.0695427397,
      p2_p: 0.0036786301,
      precioactual: 685.55,
    },
  ];

  const dataAnual = {
    cia: anualFijo.map((item) => item.cia),
    ahorro: anualFijo.map((item) => item.ahorro),
    customdata: anualFijo.map((item) => [
      item.fee,
      item.producto_cia,
      item.ahorro,
      item.porcentajeahorro,
    ]),
  };

  const traceMensual = {
    x: dataMensual.cia,
    y: dataMensual.customdata.map(data => data[3]),
    type: "bar",
    name: "Mensual",
    marker: { color: "#1F1D1C" },
    customdata: dataMensual.customdata,
    hovertemplate:
      "<b>FEE: %{customdata[0]}</b><br>" +
      "<b>PRODUCTO_CIA:</b> %{customdata[1]}<br>" +
      "<b>Ahorro en euros:</b> %{customdata[2]:,.2f}" +
      "<b>Porcentaje de ahorro:</b> %{customdata[3]}<br>",
    hoverlabel: { bgcolor: "#FAFAFA" },
  };

  const traceAnual = {
    x: dataAnual.cia,
    y: dataAnual.customdata.map(data => data[3]),
    type: "bar",
    name: "Anual",
    marker: { color: "#AB2526" },
    customdata: dataAnual.customdata,
    hovertemplate:
      "<b>FEE: %{customdata[0]}</b><br>" +
      "<b>PRODUCTO_CIA:</b> %{customdata[1]}<br>" +
      "<b>Ahorro en euros:</b> %{customdata[2]:,.2f}" +
      "<b>Porcentaje de ahorro:</b> %{customdata[3]}<br>",
    hoverlabel: { bgcolor: "#FAFAFA" },
  };

  // Chart layout
  const layout = {
    barmode: "group",
    width: 800,
    legend: {
      title: "",
      orientation: "h",
      y: -0.14,
      x: 0,
    },
    hoverlabel: { bgcolor: "#FAFAFA" },
    yaxis: {
      range: [-25, 25],
      tickvals: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
      ticktext: ["-25%", "-20%", "-15%", "-10%", "-5%", "0%", "5%", "10%", "15%", "20%", "25%"],
      showgrid: true,
    },
    margin: {
      l: 50, // left margin
      r: 10, // right margin
      b: 10, // bottom margin
      t: 10, // top margin
      pad: 4
    },
    xaxis: { showgrid: true },
    plot_bgcolor: "#FAFAFA",
    paper_bgcolor: "#FAFAFA",
    grid: { xside: "top", yside: "right" },
    bargap: 0.45,
  };

  useEffect(() => {
    const feeOptionsByCIA = {
      ACCIONA: [
        "Cierzo",
        "Levante",
        "Levante+",
        "Poniente",
        "Poniente-",
        "Tramontana",
        "Tramontana+",
      ],
      AEQ: ["3", "6", "8", "10", "15", "20", "25", "30"],
      CANDELA: [
        "01 / Bio_0,035",
        "02 / Bio_0,03",
        "03 / Bio_0,025",
        "04 / Bio_0,02",
        "05 / Bio_0,018",
        "06 / Bio_0,015",
        "07 / Bio_0,012",
        "08 / Bio_0,01",
        "09 / Bio_0,008",
        "10 / Bio_0,006",
        "11 / Bio_0,003",
      ],
      FACTOR: [
        "4",
        "6",
        "7.5",
        "8.5",
        "9.5",
        "11.5",
        "13.5",
        "15.5",
        "17.5",
        "19.5",
        "21.5",
        "23.5",
        "25.5",
        "29.5",
      ],
      GANA: ["-"],
      IGNIS: [
        "10 MARE ZEN 1",
        "15 MARE ZEN 1",
        "20 MARE PLUS 3",
        "25 MARE PLUS 2",
        "30 MARE PLUS 1",
        "4 MARE KIT 2",
        "6 MARE KIT 1",
        "8 MARE ZEN 3",
        "2.5 MARE KIT 3",
      ],
      MAX: [
        "3",
        "6",
        "8",
        "10",
        "12",
        "15",
        "18",
        "20",
        "25",
        "30",
        "35",
        "40",
      ],
      PLENITUDE: ["-"],

      // ... more CIAs
    };
    switch (cia) {
      case "ACCIONA":
        setProductos([
          "CIERZO",
          "LEVANTE+",
          "LEVANTE",
          "PONIENTE+",
          "PONIENTE",
          "TRAMONTANA+",
          "TRAMONTANA",
        ]);
        setFeeOptions(feeOptionsByCIA["ACCIONA"]);
        break;
      case "AEQ":
        setProductos(["ARMONIA", "EQUILIBRIO", "SIMETRIA"]);
        setFeeOptions(feeOptionsByCIA["AEQ"]);
        break;
      case "CANDELA":
        setProductos(["AMPERE", "FARAD", "HENRY", "LUMEN", "LUX"]);
        setFeeOptions(feeOptionsByCIA["CANDELA"]);
        break;
      case "FACTOR":
        setProductos([
          "DOMESTICO_EXTRA1P",
          "DOMESTICO_EXTRA3P",
          "DOMESTICO_MINI",
          "DOMESTICO_Precio WEB3P",
          "DOMESTICO_PRIME",
          "NEGOCIO_AHORRO",
          "NEGOCIO_AHORRO1P",
          "NEGOCIO_EXTRA",
          "NEGOCIO_EXTRA1P",
          "NEGOCIO_EXTRATOP1P",
          "NEGOCIO_MINI1P",
          "NEGOCIO_PROFESIONAL",
          "NEGOCIO_PROFESIONAL1P",
          "DOMESTICO_POOLDBOE",
          "DOMESTICO_POOLEXTRA",
          "NEGOCIO_POOLAHORRO",
          "NEGOCIO_POOLEXTRA",
          "NEGOCIO_POOLPLUS",
          "NEGOCIO_POOLPROF",
          "NEGOCIO_POOLSUMMER",
        ]);
        setFeeOptions(feeOptionsByCIA["FACTOR"]);
        break;
      case "GANA":
        setProductos(["SIN MAS"]);
        setFeeOptions(feeOptionsByCIA["GANA"]);
        break;
      case "IGNIS":
        setProductos([
          "MARE KIT 1",
          "MARE KIT 2",
          "MARE KIT 3",
          "MARE PLUS 1",
          "MARE PLUS 2",
          "MARE PLUS 3",
          "MARE ZEN 1",
          "MARE ZEN 2",
          "MARE ZEN 3",
        ]);
        setFeeOptions(feeOptionsByCIA["IGNIS"]);
        break;
      case "MAX":
        setProductos(["MAYOR C", "MAYOR B", "MAYOR A"]);
        setFeeOptions(feeOptionsByCIA["MAX"]);
        break;
      case "PLENITUDE":
        setProductos(["MILAN", "NAPOLES", "ROMA", "VENECIA"]);
        setFeeOptions(feeOptionsByCIA["PLENITUDE"]);
        break;
      default:
        setProductos([]);
        break;
    }
  }, [cia]);

  //Funcion qué generará la propuesta, guarda en la BBDD, y redirige a dicha propuesta
  const handleSubmit = () => { };
  return (
    <>
      <form id="proposal-form">
        <section id="proposal-options">
          <div>
            <select name="tipo-sistema" id="tipo-sistema" defaultValue="">
              <option value="" disabled>
                Tipo de sistema
              </option>
              <option value="peninsula">Península</option>
              <option value="baleares" disabled>
                Baleares
              </option>
              <option value="canarias" disabled>
                Canarias
              </option>
            </select>
          </div>

          <div>
            <select
              name="Metodo"
              id="Metodo"
              defaultValue=""
              onChange={(e) => setCia(e.target.value)}
            >
              <option value="" disabled>
                CIA
              </option>
              <option value="ACCIONA">ACCIONA</option>
              <option value="AEQ">AEQ</option>
              <option value="CANDELA">CANDELA</option>
              <option value="FACTOR">FACTOR</option>
              <option value="GANA">GANA</option>
              <option value="IGNIS">IGNIS</option>
              <option value="MAX">MAX</option>
              <option value="PLENITUDE">PLENITUDE</option>
            </select>
          </div>

          <div>
            <select name="metodo" id="metodo" defaultValue="">
              <option value="" disabled>
                Método
              </option>
              <option value="fijo" disabled>
                FIJO
              </option>
              <option value="indexado">INDEXADO</option>
            </select>
          </div>

          <div>
            <select
              name="producto-cia"
              id="producto-cia"
              defaultValue=""
              className="fourth-select"
            >
              <option value="" disabled>
                Producto CIA (POT)
              </option>
              {productos.map((producto) => (
                <option key={producto} value={producto}>
                  {producto}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              name="mes-facturacion"
              id="mes-facturacion"
              defaultValue=""
              className="fifth-select"
            >
              <option value="" disabled>
                Mes de facturación (indexado)
              </option>
              <option value="2023-08-01">01/08/2023</option>
              <option value="2023-07-01">01/07/2023</option>
              <option value="2023-06-01">01/06/2023</option>
              <option value="2023-05-01">01/05/2023</option>
              <option value="2023-04-01">01/04/2023</option>
              <option value="2023-03-01">01/03/2023</option>
              <option value="2023-02-01">01/02/2023</option>
              <option value="2023-01-01">01/01/2023</option>
            </select>
          </div>

          <div>
            <select
              name="fee-energia"
              id="fee-energia"
              defaultValue=""
              className="sixth-select"
            >
              <option value="" disabled>
                FEE (Energía)
              </option>
              {feeOptions.map((feeOption) => (
                <option key={feeOption} value={feeOption}>
                  {feeOption}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section id="proposal-results">
          <section id="proposal-graph">
            {/* <img src={placeholder} alt="Placeholder Graph" /> */}
            <Plot
              data={[traceMensual, traceAnual]}
              layout={layout}
              config={{ displayModeBar: false }}
            />
          </section>
          <section id="proposal-savings">
            <article id="proposal-savings-month">
              <div>
                <div>
                  <div>
                    <p>4,63</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <path
                          d="M11.5204 18.9316C11.462 19.3399 11.4318 19.7572 11.4318 20.1816C11.4318 20.606 11.462 21.0234 11.5204 21.4316H16.8485C17.5388 21.4316 18.0985 21.9913 18.0985 22.6816C18.0985 23.372 17.5388 23.9316 16.8485 23.9316H12.2738C13.6782 26.8878 16.6913 28.9316 20.1818 28.9316C21.7776 28.9316 23.2702 28.5056 24.5559 27.7618C25.1535 27.4161 25.9181 27.6203 26.2638 28.2179C26.6095 28.8155 26.4053 29.5801 25.8077 29.9258C24.1517 30.8838 22.2288 31.4316 20.1818 31.4316C15.2835 31.4316 11.1163 28.3011 9.57195 23.9316H8.51514C7.82478 23.9316 7.26514 23.372 7.26514 22.6816C7.26514 21.9913 7.82478 21.4316 8.51514 21.4316H9.00046C8.9551 21.0212 8.9318 20.6042 8.9318 20.1816C8.9318 19.7591 8.9551 19.3421 9.00046 18.9316H8.51514C7.82478 18.9316 7.26514 18.372 7.26514 17.6816C7.26514 16.9913 7.82478 16.4316 8.51514 16.4316H9.57195C11.1163 12.0622 15.2835 8.93164 20.1818 8.93164C22.2288 8.93164 24.1517 9.47951 25.8077 10.4375C26.4053 10.7831 26.6095 11.5478 26.2638 12.1454C25.9181 12.7429 25.1535 12.9471 24.5559 12.6015C23.2702 11.8577 21.7776 11.4316 20.1818 11.4316C16.6913 11.4316 13.6782 13.4755 12.2738 16.4316H16.8485C17.5388 16.4316 18.0985 16.9913 18.0985 17.6816C18.0985 18.372 17.5388 18.9316 16.8485 18.9316H11.5204Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p>Ahorro factura actual</p>
              </div>
            </article>
            <article id="proposal-savings-year">
              <div>
                <div>
                  <div>
                    <p>71,71</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <path
                          d="M11.5204 18.9316C11.462 19.3399 11.4318 19.7572 11.4318 20.1816C11.4318 20.606 11.462 21.0234 11.5204 21.4316H16.8485C17.5388 21.4316 18.0985 21.9913 18.0985 22.6816C18.0985 23.372 17.5388 23.9316 16.8485 23.9316H12.2738C13.6782 26.8878 16.6913 28.9316 20.1818 28.9316C21.7776 28.9316 23.2702 28.5056 24.5559 27.7618C25.1535 27.4161 25.9181 27.6203 26.2638 28.2179C26.6095 28.8155 26.4053 29.5801 25.8077 29.9258C24.1517 30.8838 22.2288 31.4316 20.1818 31.4316C15.2835 31.4316 11.1163 28.3011 9.57195 23.9316H8.51514C7.82478 23.9316 7.26514 23.372 7.26514 22.6816C7.26514 21.9913 7.82478 21.4316 8.51514 21.4316H9.00046C8.9551 21.0212 8.9318 20.6042 8.9318 20.1816C8.9318 19.7591 8.9551 19.3421 9.00046 18.9316H8.51514C7.82478 18.9316 7.26514 18.372 7.26514 17.6816C7.26514 16.9913 7.82478 16.4316 8.51514 16.4316H9.57195C11.1163 12.0622 15.2835 8.93164 20.1818 8.93164C22.2288 8.93164 24.1517 9.47951 25.8077 10.4375C26.4053 10.7831 26.6095 11.5478 26.2638 12.1454C25.9181 12.7429 25.1535 12.9471 24.5559 12.6015C23.2702 11.8577 21.7776 11.4316 20.1818 11.4316C16.6913 11.4316 13.6782 13.4755 12.2738 16.4316H16.8485C17.5388 16.4316 18.0985 16.9913 18.0985 17.6816C18.0985 18.372 17.5388 18.9316 16.8485 18.9316H11.5204Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p>Ahorro anual</p>
              </div>
            </article>

            <Link to={`/completa/1`}>
              <button type="submit"
                id="generate-proposal-button"
                onClick={handleSubmit}>
                Generar propuesta
              </button>
            </Link>
          </section>
        </section>
      </form>
    </>
  );
};

export default ProposalComponent;
