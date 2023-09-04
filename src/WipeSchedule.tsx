import React from 'react';
import {GlobalColoredHeaderH2, GlobalContainer} from "./globalStyles";
import Servers from "./Servers";

export default function WipeSchedule() {
  return (
    <GlobalContainer>
      <div>
        <GlobalColoredHeaderH2 id="wipe-schedule">Wipe Schedule</GlobalColoredHeaderH2>
        <p>We usually play on servers with a weekly wipe on Mondays and Thursdays, but we will post the server before wipe day on Discord. The servers we play on the most are listed below for easy access.</p>
        <Servers />
      </div>
      </GlobalContainer>
  )
}