import styled from "styled-components"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Header } from "../components/Header"

const Background = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  min-height: 100vh;
  max-width: 100%;
  padding: 0.5rem;

  ${Card} {
    width: 36rem;
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
          <p>test</p>

          <Button>hiiii</Button>
        </Card>
      </Container>
    </Background>
  )
}

export default AdminLoginPage
