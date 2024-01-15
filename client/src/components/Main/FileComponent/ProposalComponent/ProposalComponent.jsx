import React, { useState } from "react";
import placeholder from "../../../../assets/placeholder-graph.png";

const ProposalComponent = () => {
  const [monthlySavings, setMonthlySavings] = useState("12,34");
  const [yearlySavings, setYearlySavings] = useState("12,34");

  //Funcion qué generará la propuesta, guarda en la BBDD, y redirige a dicha propuesta
  const handleSubmit = () => {};
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
            <select name="cia" id="cia" defaultValue="">
              <option value="" disabled>
                CIA
              </option>
              {/* <!-- Add other companies as needed --> */}
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
              {/* Add your options here later */}
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
              {/* Add your options here later */}
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
              {/* Add your options here later */}
            </select>
          </div>
        </section>
        <section id="proposal-results">
          <section id="proposal-graph">
            <img src={placeholder} alt="Placeholder Graph" />
          </section>
          <section id="proposal-savings">
            <article id="proposal-savings-month">
              <div>
                <div>
                  <div>
                    <p>{monthlySavings}</p>
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
                    <p>{yearlySavings}</p>
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
            <button
              type="submit"
              id="generate-proposal-button"
              onClick={handleSubmit}
            >
              Generar propuesta
            </button>
          </section>
        </section>
      </form>
    </>
  );
};

export default ProposalComponent;
