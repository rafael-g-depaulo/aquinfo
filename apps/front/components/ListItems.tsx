import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import DefaultWaterImage from "../assets/waterDefaultImage.jpg"
import Image from "next/image"

const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  border: 3px solid #336666;
  border-radius: 30px;
  background-color: #33666633;
  width: 100%;
  height: 110px;
  margin: 10px 0;

  div {
    align-items: flex-start;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
  }
`
const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
  border: 1px solid #336666;
  border-radius: 100%;
`
const Label = styled.span`
  margin: 0;
  font-size: 0.7rem;
  font-weight: 200;
  margin-bottom: -4px;
`

const Title = styled.span`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
`

const Value = styled.span`
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  :last-of-type {
    margin: 0;
  }
`
const ListItem = ({ type, modelName = "Model XPTO nome grande" }) => {
  return (
    <>
      <Body>
        <div style={{ flex: 1 }}>
          <StyledImg src={DefaultWaterImage} alt="model image" />
        </div>
        <div style={{ flex: 2 }}>
          <Label>{type === 0 ? "Chuveiro" : "Descarga"}</Label>
          <Title>{modelName}</Title>
        </div>
        <div style={{ flex: 1, alignSelf: "flex-end", alignItems: "center" }}>
          {type === 0 && (
            <>
              <Label>Ligado Por</Label>
              <Value>{110} min</Value>
            </>
          )}
          {type === 1 && (
            <>
              <Label>Acionado</Label>
              <Value>{7} vezes</Value>
              <Label>Durante</Label>
              <Value>{5} segs</Value>
            </>
          )}
        </div>
        <FontAwesomeIcon
          icon={faX}
          color="red"
          size="2xs"
          style={{ cursor: "pointer" }}
        />
      </Body>
    </>
  )
}

export default ListItem
