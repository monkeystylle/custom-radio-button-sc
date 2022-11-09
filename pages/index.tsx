import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';
import CustomRadio from '../components/CustomRadio';

const Home: NextPage = () => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <>
      <Main>
        <Container>
          <CustomRadio value={value} onClick={handleChange} />
          <h6>CAT PERSON</h6>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 56px);
`;

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  h6 {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export default Home;
