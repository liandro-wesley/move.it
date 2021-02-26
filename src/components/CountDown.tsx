import { useContext } from 'react';
import {CountdownContext} from '../context/CountdownContext'
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const {minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown} = useContext(CountdownContext)    
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');
    let [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');

    if(minuteRight === '.') {
        minuteRight = minuteLeft;
        minuteLeft = '0';
    }

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled 
                className={`${styles.countDownButton}`}
                >
                    Ciclo encerrado
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0001 1.66663C5.40008 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.40008 18.3333 10.0001 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 10.0001 1.66663ZM8.33342 14.1666L4.16675 9.99996L5.34175 8.82496L8.33342 11.8083L14.6584 5.48329L15.8334 6.66663L8.33342 14.1666Z" fill="#4CD62B"/>
                    </svg>

                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            onClick={resetCountDown}
                            type="button" 
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        >
                            Abandonar ciclo
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="currentColor"/>
                            </svg>

                        </button>
                    ) : (
                        <button 
                            onClick={startCountDown}
                            type="button" 
                            className={styles.countDownButton}
                        >
                            Iniciar um ciclo
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                            </svg>

                        </button>
                    ) }
                </>
            )}


        </div>
    );
}