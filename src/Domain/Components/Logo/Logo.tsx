import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet } from 'react-native';

const StyledContainer = styled(View)`
  flex-direction: row;
`;

const StyledTake = styled(Text)`
  color: ${({ theme }) => theme.color.default};
  font-weight: 700;
  font-size: 32px;
`;

const StyledCare = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  font-size: 32px;
`;

const fontStyle = StyleSheet.create({
  FredokaOneRegular: {
    fontFamily: 'FredokaOne-Regular'
  },
});


const Logo = (props) => {
  return (
    <StyledContainer {...props}>
      <Text style={fontStyle.FredokaOneRegular}>
        <StyledTake>App</StyledTake>
        <StyledCare>Test</StyledCare>
      </Text>
    </StyledContainer>
  )
};

export default Logo;
