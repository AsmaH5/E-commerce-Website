import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 25px;
  font-size: 1.0em;
  letter-spacing: 0.1em;
  background-color: #e0ff00;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;

const Announcement = () => {
  return (
    <Container>
      LEVELS PRESENTS: SUMMER '23
    </Container>
  );
};

export default Announcement;
