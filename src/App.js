import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import GraphDetails from "./components/GraphDetails/GraphDetails";
import Header from "./components/Header/Header";

import Transactions from "./components/Transactions/Transactions";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="outerWrapper">
        <Transactions />
        <div className="graphDetailsWrapper">
          <GraphDetails title={"income"} />

          <GraphDetails title={"expense"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
