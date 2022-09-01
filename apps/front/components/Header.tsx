import Link from "next/link"
import { PropsWithChildren } from "react"
import styled from "styled-components"
import { Icon } from "./Icon"

const Background = styled.nav`
  background: #76fac7;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 1.6rem;
  width: 100vw;
`

const NavList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 0.8rem;

  > * {
    flex: 1;
  }
`

const NavLink_ = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
`
const NavLink = ({ link, children }: PropsWithChildren<{ link: string }>) => {
  return (
    <NavLink_>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </NavLink_>
  )
}

export const Header = () => {
  return (
    <Background>
      <Link href="/home">
        <a>
          <Icon />
        </a>
      </Link>

      <NavList>
        <NavLink link="/home">início</NavLink>
        <NavLink link="/calculadora">calculadora</NavLink>
        <NavLink link="/admin">admin</NavLink>
      </NavList>
    </Background>
  )
}
