import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import styled from "styled-components"

// =================================== Begin Styles =====================================================

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`
const PageTitle = styled.h2`
  margin: 0 0 2rem;
  font-size: 2rem;
  font-weight: 500;
  color: #336666;
`
const WaterSpentCard = styled.div<{ draw?: boolean; color?: string }>`
  display: flex;
  width: 100%;
  min-height: 100px;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #33666622;
  border-radius: 30px;
  border: #336666 solid 1px;
  padding: 2rem;
  opacity: ${(props) => (props.draw ? "1" : "0")};
  transition-delay: 0ms;
  transition-duration: 2s;
`
const WaterCostCard = styled.div<{ draw?: boolean; color?: string }>`
  width: 100%;
  border: #336666 solid 1px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #33666622;
  border-radius: 30px;
  padding: 2rem;
  opacity: ${(props) => (props.draw ? "1" : "0")};
  transition-delay: 0.5s;
  transition-duration: 2s;
`
const EquivalencyCard = styled.div<{ draw?: boolean; color?: string }>`
  width: 100%;
  border: #336666 solid 1px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #33666622;
  border-radius: 30px;
  padding: 2rem;
  opacity: ${(props) => (props.draw ? "1" : "0")};
  transition-delay: 1s;
  transition-duration: 2s;
`
const Button = styled.button`
  margin: 1.5rem 1rem;
  padding: 0 1rem;
  width: 20%;
  min-width: 150px;
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
  transition-duration: 0.3s;
`
const Text = styled.span<{ highlight?: boolean }>`
  font-size: ${(props) => (props.highlight ? "3rem" : "1.5rem")};
  line-height: 1.5rem;
  margin: 1rem;
  text-align: center;
`
// =================================== End of Styles =====================================================

const ResultsCard = ({ waterSpent, waterCost }) => {
  const iFood = 30
  const figurinha = 4
  const piscina = 10000
  const aguaRecomendada = 400
  const [render, setRender] = useState(false)

  const router = useRouter()

  // render cards on mount
  useEffect(() => {
    setRender(true)
  }, [])

  return (
    <Section>
      <PageTitle>Resultados</PageTitle>
      <WaterSpentCard draw={render}>
        <div>
          <Text>Você usa </Text> <Text highlight>{waterSpent}</Text>
          <Text> litros de água diariamente.</Text>
        </div>
        <br />
        <div style={{ alignSelf: "flex-end" }}>
          <Text>Isso são, em média, </Text>{" "}
          <Text highlight>{waterSpent * 30}</Text>
          <Text> litros de água por mês!</Text>
        </div>
      </WaterSpentCard>
      <WaterCostCard draw={render}>
        <div>
          <Text>Com esta quantidade de água, você está olhando para </Text>{" "}
          <Text highlight>R${waterCost}</Text>
          <Text> no final do mês.</Text>
        </div>
      </WaterCostCard>
      <EquivalencyCard draw={render}>
        <Text>Isso equivale a:</Text>
        <div>
          <Text highlight>{Math.floor(waterCost / iFood)}</Text>
          <Text> lanches no iFood.</Text>
        </div>
        <br />
        <div>
          <Text highlight>{waterSpent / aguaRecomendada}</Text>
          <Text> vezes a média de consumo diário de um estadunidense.</Text>
        </div>
        <br />
        <div>
          <Text highlight>{Math.floor(waterCost / figurinha)}</Text>
          <Text> pacotes de figurinhas da copa.</Text>
        </div>
        <br />
        <div>
          <Text>suficiente para encher</Text>
          <Text highlight>{Math.floor((waterSpent * 30) / piscina)}</Text>
          <Text> piscinas.</Text>
        </div>
        <br />
      </EquivalencyCard>
      {waterSpent < 150 && (
        <Text>
          Você já não utiliza tanta água assim, mas sempre dá para melhorar! Que
          tal dar uma olhadinha na nossa seção de dicas?
        </Text>
      )}
      {waterSpent >= 150 && (
        <Text>
          Você utiliza bastante água! Que tal tentar reduzir um pouco este
          número? Veja nossas seção dicas para saber como!
        </Text>
      )}
      <Button
        onClick={() => {
          router.replace("/dicas")
        }}
      >
        Ver Dicas!
      </Button>
    </Section>
  )
}

export default ResultsCard
