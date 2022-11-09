import React from 'react';
import styled from 'styled-components';

type Props = {};

const Dcode = (props: Props) => {
  return <Main>HELO</Main>;
};

const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 56px);
`;

export default Dcode;
