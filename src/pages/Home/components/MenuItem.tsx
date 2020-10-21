import React from 'react';
import styled, { css } from 'styled-components/macro';

interface IProps {
  title: string;
  subtitle?: string;
  size?: string;
  imageUrl: string;
}

export const MenuItem: React.FC<IProps> = ({
  title,
  subtitle,
  imageUrl,
  size,
}) => {
  return (
    <Container size={size}>
      <BackgroundImg imageUrl={imageUrl} className="backgroundImg" />
      <MenuContent className="content">
        <MenuTitle>{title.toUpperCase()}</MenuTitle>
        <MenuSubtitle>{subtitle || "SHOP NOW"}</MenuSubtitle>
      </MenuContent>
    </Container>
  );
};

interface IContainerProps {
  size: string | undefined;
}

const BackgroundImg = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;
const Container = styled.div<IContainerProps>`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .backgroundImg {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.945);
    }

    & .content {
      opacity: 0.9;
    }
  }

  ${(props) =>
    props.size &&
    css`
      height: 380px;
    `}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: absolute;
  background-color: white;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
`;

const MenuTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  margin-top: 0;
`;

const MenuSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
