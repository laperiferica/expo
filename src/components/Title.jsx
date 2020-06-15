import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  h2 {
    font-size: 3rem;
    line-height: 3rem;
    text-transform: lowercase;
    color: #663399;
  }
`;

const Title = ({ children }) => (
  <StyledTitle>
    <h2>{children}</h2>
  </StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;