import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface LayoutProps {
  // 타입 지정 범위 : React Node > React Element > JSX Element 
  children: React.ReactNode; //React 허용 선언
}

function Layout({children} : LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;