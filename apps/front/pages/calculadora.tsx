import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import styled from "styled-components"
import { ChuveiroType } from "../api/createChuveiro"
import { DescargaType } from "../api/createDescarga"

// =================================== Begin Styles =====================================================
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px 5%;
`
const PageTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #336666;
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
        <div>
          <p>Bem-vindo a calculadora de consumo de água do Aquinfo!</p>
          <p>
            Aqui você pode registrar o seus usos diários de água e ver o quanto
            você está realmente consumindo. Além disso, mostramos o resultado
            convertido em reais de acordo com os dados mais recentes de custo de
            água na sua cidade, exibindo um preço diário, mensal e anual.
          </p>
          
        </div>
      </Main>
    </>
  )
}

export default CalculadoraFront
