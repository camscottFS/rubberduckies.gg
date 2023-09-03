import React from 'react';
import {Button, GlobalContainer, HeroButtonContainer, HeroContainer} from "./globalStyles";
import logo from './assets/logo.png';

export default function Hero() {
  return (
    <GlobalContainer>
      <HeroContainer>
        <img src={logo} alt="RubberDuckies.gg" width="50%" />
        <h1>Welcome to <span>RubberDuckies.gg</span></h1>
        <h2>Rust Gaming Community</h2>
        <HeroButtonContainer>
          <Button href="#" style={{ marginRight: '1rem'}}>Apply</Button>
          <Button href="#">Discord</Button>
        </HeroButtonContainer>
      </HeroContainer>
    </GlobalContainer>
  )
}