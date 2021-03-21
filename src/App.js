import React from "react";
import styled from "@emotion/styled";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Footer = styled.div``;
