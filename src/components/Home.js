import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order online for touchless delivery'
        backgroundImg='model-s.jpg'
        leftButtonText='Custom order'
        rightButtonText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order online for touchless delivery'
        backgroundImg='model-y.jpg'
        leftButtonText='Custom order'
        rightButtonText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order online for touchless delivery'
        backgroundImg='model-3.jpg'
        leftButtonText='Custom order'
        rightButtonText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order online for touchless delivery'
        backgroundImg='model-x.jpg'
        leftButtonText='Custom order'
        rightButtonText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guaranteed'
        backgroundImg='solar-panel.jpg'
        leftButtonText='Order now'
        rightButtonText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftButtonText='Order now'
        rightButtonText='Learn more'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftButtonText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
