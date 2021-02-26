import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const {resetCountDown} = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountDown();

    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <div  className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={`Level ${activeChallenge.type} UP`}/>
                        <strong>Exercite-se</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                            <button
                                onClick={handleChallengeFailed}
                                type="button"
                                className={styles.challengeFailedButton}
                            >
                                Falhei
                            </button>
                            <button
                                onClick={handleChallengeSucceeded}
                                type="button"
                                className={styles.challengeSucceededButton}
                            >
                                Completei
                            </button>
                        </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP"/>
                    <span>Complete-os e ganhe experiência e avance de leve.</span>
                </p>
                </div>
            )}
        </div>
    );
}