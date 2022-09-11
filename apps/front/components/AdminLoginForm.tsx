import { useRouter } from "next/router"
import { startTransition, useCallback } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useMutateLogin } from "../api/adminLogin"
import { useUserToken } from "../contexts/UserToken"
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
  const { data, mutate } = useMutateLogin()
  const { setToken } = useUserToken()

  const router = useRouter()

  const submitCallback = useCallback(
    ({ email, senha }: Fields) => {
      startTransition(() => {
        mutate({ email, password: senha })
      })
    },
    [mutate],
  )

  if (data) {
    setToken(data.token)
    router.replace("/home")
  }

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
