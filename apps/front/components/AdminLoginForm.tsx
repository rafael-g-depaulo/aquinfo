import { useCallback } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./Button"
import { FormControl } from "./FormControl"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

interface Fields {
  email: string
  senha: string
}

export const AdminLoginForm = () => {
  const { register, handleSubmit } = useForm<Fields>()

  const submitCallback = useCallback((args: Fields) => {
    console.log("asdasd", args)
  }, [])

  return (
    <StyledForm onSubmit={handleSubmit(submitCallback)}>
      <FormControl
        name="email"
        type="email"
        getInputProps={() => register("email")}
      />

      <FormControl
        name="senha"
        type="password"
        getInputProps={() => register("senha")}
      />
      <Button type="submit">Entrar</Button>
    </StyledForm>
  )
}
