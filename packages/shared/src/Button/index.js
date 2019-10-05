import React from 'react';
import styled from 'styled-components';

const View = styled.button`
  border-radius: 4px;
  padding: 0.5em 1em;
`;

const Button = ({ children }) => <View>{children}</View>;

export default Button;
