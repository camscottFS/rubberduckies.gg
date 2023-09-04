import React from 'react';
import {ButtonSmall, ServerContainer, ServerItem} from "./globalStyles";

export default function Servers() {
  return (
    <ServerContainer>
      <ServerItem>
        <h3>Stevious 2x Large Mondays</h3>
        <p>Wipes at: 4:30 PM EST</p>
        <ButtonSmall href="steam://connect/199.231.233.178:28010">Connect</ButtonSmall> <span style={{ margin: ' 0 1rem' }}>or</span> <code>client.connect 199.231.233.178:28010</code>
      </ServerItem>
      <ServerItem>
        <h3>Stevious 2x Large Thursdays</h3>
        <p>Wipes at: 4:30 PM EST</p>
        <ButtonSmall href="steam://connect/199.231.233.178:28010">Connect</ButtonSmall> <span style={{ margin: ' 0 1rem' }}>or</span> <code>client.connect 199.231.233.178:28010</code>
      </ServerItem>
    </ServerContainer>
  );
}