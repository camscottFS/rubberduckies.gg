import styled from 'styled-components';

export const GlobalContainer = styled.div`
  max-width: 1080px;
  margin: 2rem auto;
  display: flex;
`;

export const NavigationContainer = styled.div`
  max-width: 1080px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  //background-color: #121212;
  //-webkit-box-shadow: 0px 0px 16px 0px rgba(247,255,0,1);
  //-moz-box-shadow: 0px 0px 16px 0px rgba(247,255,0,1);
  //box-shadow: 0px 0px 16px 0px rgba(247,255,0,1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

export const SiteLogo = styled.img`
  width: 60px;
  height: 60px;
`

export const SiteLogoText = styled.span`
  font-family: 'RubberDuckies', serif;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-left: 1rem;
`

export const LinkContainer = styled.div`
  text-transform: uppercase;
  ul {
    list-style: none;
    li {
      display: inline-block;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 2px;
      &:not(:last-child) {
        margin-right: 1.5rem;
      }
      a {
        text-decoration: none;
        color: #fff;
        transition: 0.25s;
        &:hover {
          color: #fdbe18;
        }
      }
    }
  }
`;

export const HeroContainer = styled.div`
  img {
    width: 40%;
  }
  text-align: center;
  span {
    font-size: 2.25rem;
    margin-left: 0.5rem;
    letter-spacing: 6px;
    font-weight: 100;
    font-family: Rubber-Duck,serif;
  }
`;

export const HeroButtonContainer = styled.div`
  margin-top: 3rem;
`;

export const Button = styled.a`
  background-color: #fdbe18;
  color: #12202a;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.25s;
  &:hover {
    background: #12202a;
    color: #fdbe18;
  }
`;

export const GlobalColoredHeaderH2 = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fdbe18;
  font-size: 3rem;
`