import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const MenuItem: React.FC<IProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <Container>
      <MenuContent>
        <MenuTitle>{title}</MenuTitle>
        <MenuSubtitle>{subtitle}</MenuSubtitle>
      </MenuContent>
    </Container>
  );
};

const Container = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuContent = styled.div`
  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
`;

const MenuTitle = styled.h1`
  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }
`;

const MenuSubtitle = styled.span`
  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;
