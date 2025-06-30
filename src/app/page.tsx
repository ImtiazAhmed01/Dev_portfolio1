'use client';

import About from "./component/About";
import Banner from "./component/Banner"
import WorkProcess from "./component/Process";
import Skills from "./component/Skills";


export default function HomePage() {
  return (
    <main>
      <Banner></Banner>
      <Skills></Skills>
      <About></About>
      <WorkProcess></WorkProcess>
    </main>
  );
}