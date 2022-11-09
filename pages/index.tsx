import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <>
      <Main>
        <label>
          <input type="radio" checked={value} onClick={handleChange} />
          Cat
        </label>
        <CustomRadioButton>
          <Input type="radio" checked={value} onClick={handleChange} />
          <Checkmark />
        </CustomRadioButton>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 56px);
`;

const CustomRadioButton = styled.label`
  --size: 25px;
  min-width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* changes   */

  margin: 0 10px;
  position: relative;
  padding-left: var(--size);
`;

const Input = styled.input`
  display: none;

  &:checked ~ span {
    /* changes  */

    /*  content box origin will make sure the bg-image only stays inside content area in between padding  */
    background-origin: content-box;
    background-repeat: no-repeat;
    background-image: radial-gradient(
      circle at center,
      var(--check-color)
        /* the size of the check mark is determined by subtracting from the size of the circle
     the border(both sides) and the gap(both sides) than dividing it by 2 to get the radius of the circle        */
        calc((var(--size) - (var(--border) * 2) - (var(--gap) * 2)) / 2),
      rgba(255, 255, 255, 0) 0
    );
  }
`;

const Checkmark = styled.span`
  --gap: 3px;
  --border: 2px;
  --check-color: gold;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: inline-block;
  transition: opacity 0.3s ease;
  /* changes from the video  */

  border: var(--border) solid gold;
  padding: var(--gap);
  position: absolute;
  top: 0;
  left: 0;
`;

export default Home;
