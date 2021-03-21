import React from "react";
import styled from "@emotion/styled";

export const Navbar = () => {
  return (
    <Container>
      <Item href="#">Главная</Item>
      <Item href="#">Наши проекты</Item>
      <Item href="#">Услуги</Item>
      <Item href="#">Новости</Item>
      <Item href="#">Контакты</Item>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #ffffff;
`;

const Item = styled.div`
  text-decoration: none;
  margin-right: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 40px 0 39px 0;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #ffffff;
    transition: 0.8s;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
