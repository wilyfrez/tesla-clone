import React from "react";
import Sections from "./Sections";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Sections />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
