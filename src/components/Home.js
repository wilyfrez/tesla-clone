import React from "react";
import Sections from "./Sections";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Sections
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="EXISTING INVENTORY"
      />

      <Sections
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="EXISTING INVENTORY"
      />

      <Sections
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="EXISTING INVENTORY"
      />

      <Sections
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="EXISTING INVENTORY"
      />

      <Sections
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="LEARN MORE"
      />

      <Sections
        title="Solar for New Roof"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="CUSTOM ORDER"
        rightBtnTxt="LEARN MORE"
      />

      <Sections
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="CUSTOM ORDER"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
