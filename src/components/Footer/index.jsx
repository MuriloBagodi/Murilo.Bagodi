import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    z-index: 1;
    align-items: center;
    @media (max-width: 960px) {
      padding: 0px;
    }
  `;
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  `;

  const MyName = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    letter-spacing: 2.5px;
  `;
  const Nav = styled.nav`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      text-align: center;
      font-size: 12px;
    }
  `;

  const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;
  const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    cursor: pointer;
  `;

  const CopyRight = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
  `;
  const SocialIcons = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <Wrapper>
        <MyName>Murilo Salvador Bagodi</MyName>

        <Nav>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experiencia</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Educação</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>

        <SocialIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialIcons>
        <CopyRight>
          &copy; 2024 Murilo Salvador Bagodi. Todos os direitos reservados.
        </CopyRight>
      </Wrapper>
    </Container>
  );
}

export default Footer;
