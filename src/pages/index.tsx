import React from "react";
import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";

import styles from "../styles/pages/Home.module.css"
import { ChallengeBox } from "../components/ChallengeBox";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it - Home</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown />
        </div>
        <div id="challengeBox">
            <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}
