import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import styled from "styled-components"
import { ChuveiroType } from "../api/createChuveiro"
import { DescargaType } from "../api/createDescarga"

// =================================== Begin Styles =====================================================
const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f4ffff;
  width: 100vw;
  min-height: 100vh;
  /* flex: 1; */
  padding: 30px 0;
`
const PageTitle = styled.h1`
  padding: 0;
  margin: 0 6% 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #336666;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #a9dbf9;
  width: 95%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 60px;
  padding-left: 7%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    align-self: center;
    width: 100%;
  }
`

const Paragraph = styled.p<{ bold?: boolean }>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: 1rem;
  margin: 1.5rem 1rem;
  font-family: sans-serif;
  line-height: 180%;
`

// =================================== End of Styles =====================================================

const CalculadoraFront = () => {
  const [descargasData, setDescargasData] = useState<DescargaType[]>([])

  const [chuveirosData, setChuveirosData] = useState<ChuveiroType[]>([])

  // change page name
  useEffect(() => {
    document.title = "Aqüinfo | Calculadora"
  }, [])

  // fetched data, mocked for now
  useEffect(() => {
    const fetchedDescargaData = [
      {
        id: 1,
        name: "Válvula",
        type: [
          { seconds: 3, totalWaterCost: 5 },
          { seconds: 7, totalWaterCost: 15 },
        ],
        image: null,
      },
      {
        id: 2,
        name: "Caixa Elevada",
        type: [
          { seconds: 4, totalWaterCost: 4 },
          { seconds: 10, totalWaterCost: 10 },
        ],
        image: null,
      },
      {
        id: 3,
        name: "Caixa Acoplada",
        type: [
          { seconds: 5, totalWaterCost: 10 },
          { seconds: 8, totalWaterCost: 20 },
        ],
        image: null,
      },
    ]

    const fetchedChuveiroData = [
      {
        id: 1,
        name: "Elétrico",
        waterPerMinute: 4,
        image: null,
      },
    ]

    setDescargasData(fetchedDescargaData)
    setChuveirosData(fetchedChuveiroData)
  }, [])

  return (
    <>
      <Header></Header>
      <Main>
        <PageTitle>Calculadora</PageTitle>
        <Container>
          <Wrapper>
            <div style={{ flex: 2 }}>
              <Paragraph bold>
                Bem-vindo a calculadora de consumo de água do Aquinfo!
              </Paragraph>
              <Paragraph>
                Aqui você pode registrar o seus usos diários de água e ver o
                quanto você está realmente consumindo. Além disso, mostramos o
                resultado convertido em reais de acordo com os dados mais
                recentes de custo de água na sua cidade, exibindo um preço
                diário, mensal e anual.
              </Paragraph>
            </div>
            <div style={{ flex: 1 }}>
              <span>SVG</span>
            </div>
          </Wrapper>
          <Wrapper>
            <div style={{ flex: 2 }}>
              <Paragraph bold>
                Bem-vindo a calculadora de consumo de água do Aquinfo!
              </Paragraph>
              <Paragraph>
                Aqui você pode registrar o seus usos diários de água e ver o
                quanto você está realmente consumindo. Além disso, mostramos o
                resultado convertido em reais de acordo com os dados mais
                recentes de custo de água na sua cidade, exibindo um preço
                diário, mensal e anual.
              </Paragraph>
            </div>
            <div style={{ flex: 1 }}>
              <span>SVG</span>
            </div>
          </Wrapper>
        </Container>
      </Main>
    </>
  )
}

export default CalculadoraFront
