import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <h1>Paw Patrol and Valerie</h1>
      </Header>
      {children}
      <Footer>&copy; Copyright</Footer>
    </>
  );
}

const Header = styled.header`
  height: 50px;
  background: blue;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  height: 20px;
  background: blue;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
