import React from 'react';
import styled from 'styled-components';

const View = styled.button`
  background-color: blue;
`;

const Button = ({ children }) => <View>{children}123</View>;

export default Button;
