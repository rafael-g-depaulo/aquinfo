import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import styled from "styled-components"

export type ButtonProps = ButtonHTMLAttributes<unknown> & PropsWithChildren

const StyledButton = styled.button`
  width: 100%;
  max-width: 30rem;
  padding: 0.5rem 1rem;

  background: #76fac7;
  border-radius: 0.5rem;

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: #000000;

  cursor: pointer;

  &:hover {
    background: #6fdab1;
  }
  &:active {
    background: #62b897;
  }
`

export const Button = ({ onClick, children }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
