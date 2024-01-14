import { useState } from "react";
import { ClientContext } from "./context/clientContext";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [clientData, setClientData] = useState({});
  return (
    <>
      <ClientContext.Provider value={{ clientData, setClientData }}>
        <Header />
        <Main />
        {/* <Footer /> */}
      </ClientContext.Provider>
    </>
  );
}

export default App;
