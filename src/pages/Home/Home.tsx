import React from 'react';
import styled from 'styled-components';

import { MenuDirectory } from './components/MenuDirectory';

export const Home: React.FC = (props) => {
  return (
    <HomePage>
      <MenuDirectory></MenuDirectory>
    </HomePage>
  );
};

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
