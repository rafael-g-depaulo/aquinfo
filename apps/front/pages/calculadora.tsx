import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import styled from "styled-components"
import { gastoPorLitroPorMês } from "../api/createChuveiro"
import CalculatorIcon from "../assets/calculator_icon.svg"
import Image from "next/image"
import CalculatorList from "../components/CalculatorList"
import ResultsCard from "../components/ResultsCard"
import CalculatorModal from "../components/CalculatorModal"

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
  margin: 2rem 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
  }
`

const Paragraph = styled.p<{ bold?: boolean }>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: 1rem;
  margin: 1.5rem 1rem;
  font-family: sans-serif;
  line-height: 180%;
`

const Button = styled.button`
  margin: 1.5rem 1rem;
  padding: 0 1rem;
  width: 50%;
  height: 40px;
  background-color: #76fac7;
  border-radius: 100px;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: #000000;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    background-color: #53d8a5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  :disabled {
    background-color: #e6f3ee33;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  }
  transition-duration: 0.3s;
`
// =================================== End of Styles =====================================================

const CalculadoraFront = () => {
  const resultsRef = useRef(null)

  const [descargasData, setDescargasData] = useState([])
  const [chuveirosData, setChuveirosData] = useState([])

  const [consumoList, setConsumoList] = useState([])

  const [waterSpent, setWaterSpent] = useState(0)
  const [waterCost, setWaterCost] = useState(0.0)

  const [showResults, setShowResults] = useState(false)

  const [toggleModal, setToggleModal] = useState(false)

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
          { id: 101, seconds: 3, totalWaterCost: 5 },
          { id: 102, seconds: 7, totalWaterCost: 15 },
        ],
        image: null,
      },
      {
        id: 2,
        name: "Caixa Elevada",
        type: [
          { id: 201, seconds: 4, totalWaterCost: 4 },
          { id: 202, seconds: 10, totalWaterCost: 10 },
        ],
        image: null,
      },
      {
        id: 3,
        name: "Caixa Acoplada",
        type: [
          { id: 301, seconds: 5, totalWaterCost: 10 },
          { id: 303, seconds: 8, totalWaterCost: 20 },
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

  // scroll into view
  useEffect(() => {
    resultsRef.current.scrollIntoView()
  }, [showResults])

  function handleConsumptionCalculation() {
    let totalWaterSpent = 0
    let totalCost = 0.0

    consumoList.forEach((c) => {
      let type = 0
      try {
        if (c.timesPressed > 0) {
          type = 1
        }
      } catch (error) {
        type = 0
      }
      if (type === 0) {
        // consumo banho
        totalWaterSpent += c.waterPerMinute * c.minutesPressed
      }
      if (type === 1) {
        //consumo descarga
        totalWaterSpent += c.type.totalWaterCost * c.timesPressed
      }
    })

    totalCost = gastoPorLitroPorMês(totalWaterSpent * 30)

    setWaterCost(totalCost)
    setWaterSpent(totalWaterSpent)

    setShowResults(true)
  }

  // delete from list
  function deleteFromList(id) {
    setConsumoList(consumoList.filter((consumo) => consumo.id != id))
  }

  return (
    <>
      {toggleModal && (
        <CalculatorModal
          setToggleModal={setToggleModal}
          chuveirosData={chuveirosData}
          descargasData={descargasData}
          consumoList={consumoList}
          setConsumoList={setConsumoList}
        />
      )}
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
              <Image
                src={CalculatorIcon}
                alt="Ícone Calculadora"
                width="250px"
                height="250px"
              />
            </div>
          </Wrapper>
          <Wrapper>
            <div style={{ flex: 1, padding: "1rem 3rem 1rem 0" }}>
              <CalculatorList
                consumoList={consumoList}
                deleteFromList={deleteFromList}
                setToggleModal={setToggleModal}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Paragraph>
                A tabela ao lado indica os equipamentos que utilizam água
                informados para o cálculo do seu consumo.
              </Paragraph>
              <Paragraph>
                Para adicionar um novo equipamento, toque no botão “+” dentro da
                tabela e preencha as informações do modal que aparecerá na tela.
                Ao terminar de registrar seu consumo, toque no botão “Calcular
                Resultados” abaixo para exibir seus resultados.
              </Paragraph>
              <Button
                disabled={consumoList.length > 0 ? false : true}
                onClick={() => {
                  handleConsumptionCalculation()
                }}
              >
                CALCULAR RESULTADOS
              </Button>
            </div>
          </Wrapper>
        </Container>
        <div ref={resultsRef}></div>
        {showResults && (
          <>
            <ResultsCard waterCost={waterCost} waterSpent={waterSpent} />
          </>
        )}
      </Main>
    </>
  )
}

export default CalculadoraFront
