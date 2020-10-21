import React from 'react';
import styled from 'styled-components';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

const Container = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
`;

export default App;
