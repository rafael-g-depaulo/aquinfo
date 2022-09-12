import styled from "styled-components"
import { Header } from "../components/Header"

// =================================== Begin Styles =====================================================
const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f4ffff;
  width: 100vw;
  min-height: 100vh;
  padding: 30px 0;
  scroll-behavior: smooth;
`
const PageTitle = styled.h1`
  padding: 0;
  margin: 0 6% 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #336666;
`

// =================================== End of Styles =====================================================

const Dicas = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <PageTitle>Dicas</PageTitle>
      </Main>
    </>
  )
}

export default Dicas
