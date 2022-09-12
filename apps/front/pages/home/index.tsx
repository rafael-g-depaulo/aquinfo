import styled from "styled-components"
// import { useIsLoggedIn } from "../../api/isLoggedIn"
import { Header } from "../../components/Header"
import Image from "next/image"

const home = "/assets/home.jpg"
const adasa = "/assets/adasa.png"
const caesb = "/assets/caesb.png"
const calculator = "/assets/calculator.png"
const shower = "/assets/shower.png"
const newspaper = "/assets/newspaper.png"

const StyledHomePage = styled.div``

const StyledTopSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1ffff;
  width: 100%;
  align-items: center;
  padding: 50px;
`

const StyledMidSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0081cf;
  width: 100%;
  align-items: center;
  padding: 50px;

  h1 {
    font-size: 24px;
    color: white;
  }
`
const StyledBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #336666;
  width: 100%;
  align-items: center;
  padding: 50px;
`
const StyledBttomSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid white;
  padding: 20px;
  max-width: 300px;

  h1 {
    font-size: 24px;
    color: white;
    margin-bottom: 10px;
  }

  span {
    color: white;
  }
`

const StyledBottomSectionRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`
const StyledAuthority = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
  }

  span {
    color: white;
  }

  a {
    color: white;
  }
`

const StyledMidSectionTextBox = styled.div`
  -webkit-columns: 400px 2;
  -moz-columns: 400px 2;
  columns: 400px 2;
  column-gap: 160px;
  margin-top: 32px;

  span {
    color: white;
  }
`

const StyledTopSectionTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const StyledTitle = styled.h1`
  font-size: 24px;
`

const StyledText = styled.span`
  background-color: #00d7dc;
  padding: 8px 12px;
  border-radius: 20px;
`
const StyledTextContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`
const StyledTopSectionImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    border-radius: 100%;
    width: 400px;
    height: 400px;
  }
`

const StyledFunctionality = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #76fac7;
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
  border-radius: 10px;
  min-height: 160px;
  padding: 24px;

  img {
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
`

const StyledFunctionalityText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`

export function HomePage() {
  // const isLoggedIn = useIsLoggedIn()
  return (
    <StyledHomePage>
      <Header />
      <StyledTopSection>
        <StyledTopSectionTextBox>
          <StyledTitle>
            Aprenda sobre o quanto o disperdício de água impacta a sua vida!
          </StyledTitle>
          <StyledTextContainer>
            <span>
              Você faz alguma ideia de quanto dinheiro perde com o disperdício
              de água?
            </span>
          </StyledTextContainer>
          <StyledTextContainer>
            <StyledText>Mergulhe no projeto!</StyledText>
          </StyledTextContainer>
        </StyledTopSectionTextBox>
        <StyledTopSectionImageBox>
          <Image width="350" height="350" src={home} alt=""></Image>
        </StyledTopSectionImageBox>
      </StyledTopSection>
      <StyledMidSection>
        <h1>Bem-vindos ao Aquinfo!</h1>
        <StyledMidSectionTextBox>
          <span>
            Percebemos que muitas vezes as pessoas não fazem ideia do
            disperdício de água que pode ocorrer em suas casas, assim como o
            dinnheiro que perdem com esse disperdício e o disperdício que
            acontece nas ruas. Tendo em vista as crises hídricas de Planaltina e
            a do DF há alguns anos atrás, resolvemos criar esse site. Aqui você
            pode aprender quanta água realmente é gasta na sua casa, como evitar
            disperdício de água, como a questão hídrica está acontecendo no DF e
            quais são as autoridades competentes para relatar problemas
            hídricos.
          </span>
        </StyledMidSectionTextBox>
      </StyledMidSection>
      <StyledBottomSection>
        <StyledBttomSectionLeft>
          <h1>Com quem falar?</h1>
          <span>
            Prover água e sanemento é responsabilidade do nosso governo! Aqui
            você encontra os responsáveis por essas tarefas para poder monitorar
            ou tirar dúvidas sobre o uso da água em sua RA.
          </span>
        </StyledBttomSectionLeft>
        <StyledBottomSectionRight>
          <StyledAuthority>
            <Image width="100" height="100" src={adasa} alt=""></Image>
            <span>Adasa</span>
            <span>(61) 3961-5000</span>
            <a
              href="https://www.adasa.df.gov.br/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.adasa.df.gov.br/
            </a>
          </StyledAuthority>
          <StyledAuthority>
            <Image width="100" height="100" src={caesb} alt=""></Image>
            <span>Caesb</span>
            <span>(61) 98480-5115</span>
            <a
              href="https://www.caesb.df.gov.br/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.caesb.df.gov.br/
            </a>
          </StyledAuthority>
        </StyledBottomSectionRight>
      </StyledBottomSection>
      <StyledFunctionality>
        <Image width="100" height="100" alt="" src={calculator}></Image>
        <StyledFunctionalityText>
          <h1>Calculadora</h1>
          <span>
            Calcule o quanto você gasta com o consumo de água na sua casa
          </span>
        </StyledFunctionalityText>
      </StyledFunctionality>
      <StyledFunctionality>
        <Image width="100" height="100" alt="" src={shower}></Image>
        <StyledFunctionalityText>
          <h1>Dicas</h1>
          <span>Veja aqui maneiras de economizar água</span>
        </StyledFunctionalityText>
      </StyledFunctionality>
      <StyledFunctionality>
        <Image width="100" height="100" alt="" src={newspaper}></Image>
        <StyledFunctionalityText>
          <h1>Notícias</h1>
          <span>Veja aqui notícias sobre a situação hídrica no DF</span>
        </StyledFunctionalityText>
      </StyledFunctionality>
    </StyledHomePage>
  )
}

export default HomePage
