import React from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

export const Home: React.FC = (props) => {
  return (
    <HomePage>
      <DirectoryMenu>
        <MenuItem title="Hello" subtitle="world" imageUrl={"imagepath"} />
        <MenuItem title="Hello" subtitle="world" imageUrl={"imagepath"} />
        <MenuItem title="Hello" subtitle="world" imageUrl={"imagepath"} />
        <MenuItem title="Hello" subtitle="world" imageUrl={"imagepath"} />
      </DirectoryMenu>
    </HomePage>
  );
};

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
