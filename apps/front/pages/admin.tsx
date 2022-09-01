import styled from "styled-components"
import { AdminLoginForm } from "../components/AdminLoginForm"
import { Card } from "../components/Card"
import { Header } from "../components/Header"

const Background = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  max-width: 100%;
  padding: 0.5rem;

  ${Card} {
    max-width: 100%;
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
`

export const AdminLoginPage = () => {
  return (
    <Background>
      <Header />
      <Container>
        <Title>Área de Admin</Title>
        <Card>
          <AdminLoginForm />
        </Card>
      </Container>
    </Background>
  )
}

export default AdminLoginPage
