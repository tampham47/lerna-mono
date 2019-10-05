import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 2em);
  max-width: 48em;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Container>
      <h1>Auth app</h1>
    </Container>
  );
}

export default App;
