import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenge = false;
    return (
        <div  className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe xp </header>
                    <main>
                        <img src="icons/body.svg" alt="Level UP"/>
                        <strong>Exercite-se</strong>
                        <p>É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>

                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailButton}
                            >
                                Falhei
                            </button>
                            <button
                                type="button"
                            >
                                Completei
                            </button>
                        </footer>
                    </main>
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