"use client";

import Image from "next/image";
import {
  LandingHeader,
  LandingHero,
  LandingDeals,
  LandingServices,
  LandingFooter,
  LandingAbout,
} from "../components";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState('hero');

  return (
    <main
      style={{
        width: '100vw', minHeight: '100vh', background: 'white', padding: 0, margin: 0
      }}
    >
      <LandingHeader setCurrent={setCurrent}  />
      {
        current === 'hero'
          ?
          <LandingHero />
          :
          <LandingAbout />
      }
      <LandingDeals />
      <LandingServices />
      <LandingFooter />
    </main>
  );
}
