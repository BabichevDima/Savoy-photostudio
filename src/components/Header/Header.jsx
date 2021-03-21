import React from "react";
import styled from "@emotion/styled";

import { Navbar } from "./Navbar";
import Savoy from "../../assets/images/Savoy.jpg";
import Button from "react-bootstrap/Button";

export const Header = () => {
  return (
    <ContainerMain>
      <Container>
        <Navbar />
        <HeaderTop>
          <Title>Лучшая фотостудия </Title>
          <TitleBig>Мы создаем легкие решения сложных задач и проблем</TitleBig>
          <Button>Наши проекты</Button>
        </HeaderTop>
      </Container>
    </ContainerMain>
  );
};

const ContainerMain = styled.div`
  background-image: url(${Savoy});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  border-bottom: 1px solid grey;
  padding-bottom: 150px;
`;
const Container = styled.div`
  max-width: 1113px;
  width: 100%;
  margin: auto;
  padding: 0;
  box-sizing: border-box;
`;
const HeaderTop = styled.div`
  padding: 220px 0 335px;
  text-align: center;
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
`;
const TitleBig = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  width: 829px;
  margin: auto;
`;
