import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  value: boolean;
  onClick: () => void;
  size?: string;
  color?: any;
};

const CustomRadio = ({ value, onClick, color, size }: Props) => {
  return (
    <>
      <CustomRadioButton size={size}>
        <Input type="radio" checked={value} onClick={onClick} />
        <Checkmark color={color} />
      </CustomRadioButton>
    </>
  );
};

const CustomRadioButton = styled.label<{ size: string }>`
  /* change size of the radio button */
  --size: 25px;
  --size: ${props => (props.size ? props.size : '25px')};
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

const Checkmark = styled.span<{ color: string }>`
  --gap: 3px;
  --border: 2px;
  /* color of the circle inside */
  --check-color: ${props => (props.color ? props.color : 'black')};
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: inline-block;
  transition: opacity 0.3s ease;

  /* color of the circle outside */
  border: var(--border) solid black;
  ${({ color }) =>
    color
      ? css`
          border: var(--border) solid ${color};
        `
      : css`
          border: var(--border) solid black;
        `}

  padding: var(--gap);
  position: absolute;
  top: 0;
  left: 0;
`;

export default CustomRadio;
