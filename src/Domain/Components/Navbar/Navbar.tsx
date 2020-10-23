import React from 'react';
import { string, shape, func, bool, arrayOf } from 'prop-types';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon } from './../';

const StyledContainer = styled(View)`
  background-color: #ddd;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${({ theme }) => theme.height.navbar};
`;

const StyledItem = styled(TouchableOpacity)`
  align-items: center;
`;

const StyledLabel = styled(Text)`
  font-weight: 700;
  font-size: 11px;
  color: ${({ theme }) => theme.color.gray};
  text-transform: uppercase;
`;

const StyledPrimary = styled(TouchableHighlight)`
  width: 62px;
  height: 62px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.black};
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
`;

const Navbar = ({ items, ...props }) => {
  return (
    <StyledContainer {...props}>
      {items.map(({ icon, primary, label, ...props }) =>
        primary ? (
          <StyledPrimary {...props}>
            <Icon icon={icon} size={32} color="#fff" />
          </StyledPrimary>
        ) : (
          <StyledItem {...props}>
            <>
              <Icon icon={icon} size={28} />
              <StyledLabel>{label}</StyledLabel>
            </>
          </StyledItem>
        ),
      )}
    </StyledContainer>
  );
};

Navbar.propTypes = {
  items: arrayOf(
    shape({
      icon: string,
      label: string,
      onPress: func,
      primary: bool,
    }),
  ).isRequired,
};

export default Navbar;
