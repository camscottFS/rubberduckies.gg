import React from 'react';
import {LinkContainer, LogoContainer, NavigationContainer, SiteLogo, SiteLogoText} from "./globalStyles";
import logo from './assets/logo.png';

export default function Navigation() {
  return (
    <NavigationContainer>
      <LogoContainer>
        <SiteLogo src={logo} alt="RubberDuckies.gg" />
        <SiteLogoText>RubberDuckies.gg</SiteLogoText>
      </LogoContainer>
      <LinkContainer>
        <ul>
          <li>
            <a href="#wipe-schedule">Wipe Schedule</a>
          </li>
          <li>
            <a href="#rules">Rules</a>
          </li>
          <li>
            <a href="#">Ranks</a>
          </li>
          <li>
            <a href="#">
              Apply
            </a>
          </li>
          <li>
            <a href="https://discord.gg/rubberduckies" target="_blank">Join Discord</a>
          </li>
        </ul>
      </LinkContainer>
    </NavigationContainer>
  );
}