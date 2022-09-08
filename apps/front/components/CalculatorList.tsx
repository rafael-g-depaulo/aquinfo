import React from "react"
import styled from "styled-components"
import ListItem from "./ListItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// =================================== Begin Styles =====================================================

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 330px;
  border-radius: 30px;
  background-color: #ffffff;
`

const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex: 1;
  border-bottom: 1px solid lightgray;
  padding: 0 1rem;
  margin-bottom: 15px;

  svg {
    cursor: pointer;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`

const Label = styled.span`
  font-size: 0.6rem;
`

const ListScroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 90%;
  flex: 4;
`
// =================================== End of Styles =====================================================

const CalculatorList = () => {
  return (
    <>
      <Body>
        <ListHeader>
          <HeaderWrapper>
            <Title>CONSUMOS INFORMADOS</Title>
            <Label>Total: {2}</Label>
          </HeaderWrapper>
          <FontAwesomeIcon icon={faPlus} color="#0081CF" size="2x"/>
        </ListHeader>
        <ListScroll>
          <ListItem type={0}/>
          <ListItem type={1}/>
          <ListItem type={0}/>
          <ListItem type={1}/>
          <ListItem type={0}/>
          <ListItem type={1}/>
          <ListItem type={0}/>
          <ListItem type={1}/>
        </ListScroll>
      </Body>
    </>
  )
}

export default CalculatorList
