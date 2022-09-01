import { HTMLInputTypeAttribute } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import styled from "styled-components"

const StyledFieldset = styled.fieldset`
  font-weight: 500;
  font-size: 1rem;
  color: #000000;

  padding: 0;
  margin-bottom: 0.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;

  /* > label { */
  /* font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;

    display: flex;
    flex-direction: column; */
  /* } */

  > input {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;

    min-height: 1.6rem;
    padding: 0.4rem 0.8rem;

    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
  }
`

type ControlProps<Name extends string> = {
  name: Name
  type?: HTMLInputTypeAttribute
  getInputProps: () => UseFormRegisterReturn<Name>
}

export const FormControl = <Name extends string>({
  name,
  type = "text",
  getInputProps,
}: ControlProps<Name>) => {
  return (
    <StyledFieldset>
      <label htmlFor={name}>
        {name[0].toLocaleUpperCase()}
        {name.slice(1)}:
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={name}
        {...getInputProps()}
      />
    </StyledFieldset>
  )
}
