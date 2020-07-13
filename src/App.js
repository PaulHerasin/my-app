import React from "react";

import Layout from "./hoc/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <MainPage></MainPage>
      </Layout>
    </div>
  );
}

export default App;
